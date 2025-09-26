export type RegistrationDTO = {
  body: {
    firstName?: string;
    lastName?: string;
    patronymic?: string;
    dateOfBirth?: Date;
    email: string;
    password: string;
  };
};

export type AuthorizationDTO = {
  body: {
    email: string;
    password: string;
  };
};

export type ResAuthorization = {
  message: string;
  token: string;
};
