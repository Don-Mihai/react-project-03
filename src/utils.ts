interface ErrorTexts {
    [key: string]: string;
}

export const validateErrors = (errors: ErrorTexts): boolean => {
    for (const key in errors) {
        if (errors[key].trim() !== '') {
            return false;
        }
    }
    return true;
};

export const validateLogin = (login: string): string => {
    let errorMessage = '';

    const regex = /^[A-Za-z0-9_]+$/;

    if (!regex.test(login)) {
        errorMessage = 'Недопустимое значение для логина';
    }

    if (login.trim() === '') {
        errorMessage = 'Логин обязателен для заполнения';
    }

    return errorMessage;
};

export const validatePassword = (password: string): string => {
    let errorMessage = '';

    const regex = /^[A-Za-z0-9_]+$/;

    if (!regex.test(password)) {
        errorMessage = 'Недопустимое значение для пароля';
    }

    if (password.trim() === '') {
        errorMessage = 'Пароль обязателен для заполнения';
    }

    return errorMessage;
};

export const BASE_URL = 'http://localhost:3001';
