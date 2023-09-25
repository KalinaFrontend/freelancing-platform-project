import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import InputAuth from "../../InputAuth/InputAuth";
import LinkBar from "../../LinkBar/LinkBar";
import "./RegisterForm.css";

const RegisterForm = () => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__statusNameContainer">
          <div className="register__statusNameLeft">
            <label className="register__radioButtonLabel">
              <input
                className="register__radioButton"
                id="customer"
                type="radio"
                name="role"
                defaultChecked
              />
              <span className="register__radioButtonFake"></span>
              <span className="register__radioButtonText">Я заказчик</span>
            </label>
            <InputAuth placeholder="Имя" marginTop={20} type="text" autocomplete="given-name" />
          </div>

          <div className="register__statusNameRight">
            <label className="register__radioButtonLabel">
              <input
                className="register__radioButton"
                id="freelancer"
                type="radio"
                name="role"
              />
              <span className="register__radioButtonFake"></span>
              <span className="register__radioButtonText">Я фрилансер</span>
            </label>
            <InputAuth placeholder="Фамилия" marginTop={20} type="text" autocomplete="family-name" />
          </div>
        </div>
        <InputAuth placeholder="Эл. почта" marginTop={20} width={610} type="email" autocomplete="email" />
        <InputAuth placeholder="Пароль" marginTop={20} width={610} type="password" autocomplete="new-password" />
        <InputAuth placeholder="Повторите пароль" marginTop={20} width={610} type="password" autocomplete="new-password" />
        <LinkBar />
        <Button text='Создать аккаунт' width={399} type="submit" />
        <div className="register__footerLinkContainer">
          <p className="register__footerLinkDescription">Уже есть аккаунт?</p>
          <Link className="register__footerLink" to='/signin'>Войти</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
