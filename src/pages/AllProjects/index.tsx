import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import bemCreator from '../../components/bemCreator';
import SectionTop from '../../components/SectionTop';

import { fetchUser, selectCurrentUser } from '../../redux/user';
import { fetch, selectProject } from '../../redux/project';
import { ORDER_STATUS, POrder } from '../../redux/order/types';
import { fetchOrders } from '../../redux/order';
import { addToMyOrders, deleteFromMyOrders, create, fetchMyOrders, remove, selectOrdersState } from '../../redux/order';
import { ROLES } from '../../redux/user/types';
import { Project } from '../../redux/project/types';

import './AllProjects.scss';
import '../../components/LinkButton/LinkButton.scss';

const cn = bemCreator('all-projects');

const AllProjects = () => {
    const dispatch = useAppDispatch();
    const projects = useAppSelector(selectProject);
    const { myOrders, orders } = useAppSelector(selectOrdersState);
    const [order, setOrder] = React.useState<POrder>({} as POrder);

    const currentUser = useAppSelector(selectCurrentUser);
    const { id } = currentUser;

    React.useEffect(() => {
        const initialState = {
            executorId: id,
            status: ORDER_STATUS.PENDING,
        };
        setOrder(initialState as POrder);
    }, [id]);

    const isProjectInMyOrders = React.useCallback(
        (projectId: number) => {
            const isMyOrder = myOrders.find(order => order.projectId === projectId);
            return isMyOrder;
        },
        [myOrders]
    );

    //Проверяем, вошел ли фрилансер, только он может взять заказ
    const isFreelancer: boolean = currentUser?.role === ROLES.FREELANCER;

    const getAllProjects = async () => {
        await dispatch(fetch());
    };

    const getOrders = async () => {
        await dispatch(fetchOrders());
        await dispatch(fetchMyOrders());
    };

    const fetchCurrentUser = async () => {
        await dispatch(fetchUser(Number(localStorage.getItem('userId'))));
    };

    React.useEffect(() => {
        Promise.all([fetchCurrentUser(), getAllProjects(), getOrders()]).catch(error => {
            console.error('Ошибка при запросе проектов и заказов');
        });
    }, []);

    const createOrder = React.useCallback(
        async ({ id }: Project) => {
            try {
                const updatedOrder = { ...order, projectId: id };
                setOrder(updatedOrder);

                await dispatch(create(updatedOrder));
                dispatch(addToMyOrders(updatedOrder));
            } catch (error) {
                alert('Возникла ошибка при взятии заказа');
            }
        },
        [order, dispatch]
    );

    const deleteOrder = React.useCallback(
        async (project: Project) => {
            const findItem = orders.find(order => order.projectId === project.id);

            if (findItem) {
                await dispatch(remove(findItem.id));
                dispatch(deleteFromMyOrders(findItem.id));
            }
        },
        [orders, dispatch]
    );

    return (
        <section className={cn()}>
            <SectionTop className={cn('top')} sectionTitle="Раздел фрилансеров" sectionSubtitle="Найти проект" />
            {!id && <p className={cn('info')}>Для того, чтобы взять проект, авторизуйтесь в качестве фрилансера</p>}

            <div className={cn('wrap')}>
                <div className={cn('cards')}>
                    {projects.length > 0 &&
                        projects
                            // можно вывести только те проекты, которые не в архиве и не в работе
                            .filter(project => project.canTakeProject)
                            .map(project => (
                                <Paper key={project.id} className={cn('card')} variant="outlined" square>
                                    <div className={cn('wrap')}>
                                        <h3 className={cn('card-title')}>{project.title}</h3>
                                        <p className={cn('description')}>{project.description}</p>
                                    </div>
                                    {/* Если пользователь авторизован, как фрилансер, то добавить возможность взять проект */}
                                    {isFreelancer &&
                                        (isProjectInMyOrders(project.id) ? (
                                            <Button onClick={() => deleteOrder(project)} className={`link-button`} variant="outlined">
                                                Отозвать заказ
                                            </Button>
                                        ) : (
                                            <Button onClick={() => createOrder(project)} className={`link-button`} variant="outlined">
                                                Взять заказ
                                            </Button>
                                        ))}
                                </Paper>
                            ))}
                </div>
            </div>
        </section>
    );
};

export default AllProjects;
