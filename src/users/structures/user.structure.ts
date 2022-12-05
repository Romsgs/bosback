export interface ICreateUser {
  execute(createUserDTO);
}

export interface IDeleteUserById {
  execute(id);
}

export interface IGetUserById {
  execute(id);
}

export interface IUpdateUserById {
  execute(bodyDto);
}
