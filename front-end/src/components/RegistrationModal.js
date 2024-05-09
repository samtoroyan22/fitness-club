import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Form, Input, DatePicker, Radio, Button, message } from 'antd';
import './RegistrationModal.css';

const RegistrationModal = ({ visible, onClose, initialSection }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [section, setSection] = useState(initialSection);
  const navigate = useNavigate();

  useEffect(() => {
    setSection(initialSection);
  }, [initialSection]);

  const handleSectionChange = (selectedSection) => {
    setSection(selectedSection);
    form.resetFields();
  };

  const handleRegister = async (values) => {
    setLoading(true);
    const registerUrl = "http://localhost:8080/register";
    try {
      const response = await fetch(registerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        onClose();
        message.success('Registration successful');
        navigate('/user');
      } else {
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  const handleLogin = async (values) => {
    setLoading(true);
    const loginUrl = "http://localhost:8080/login";
    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.accessToken);

        onClose();
        message.success('Login successful');
        navigate('/user');
      } else {
        message.error(`Login failed: ${data.message}`); 
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("An error occurred. Please try again.");
    }
    setLoading(false);
  };


  return (
    <Modal
      title="Регистрация / Авторизация"
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Отмена
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={() => form.submit()}>
          {section === 'registration' ? 'Зарегистрироваться' : 'Войти'}
        </Button>,
      ]}
    >
      <div className="registration-sections">
        <button className={section === 'registration' ? 'active' : ''} onClick={() => handleSectionChange('registration')}>Регистрация</button>
        <button className={section === 'login' ? 'active' : ''} onClick={() => handleSectionChange('login')}>Авторизация</button>
      </div>
      <Form form={form} name="registration_form" onFinish={section === 'registration' ? handleRegister : handleLogin} layout="vertical">
        {section === 'registration' && (
          <>
            <Form.Item
              name="firstName"
              label="Имя"
              rules={[{ required: true, message: 'Пожалуйста, введите ваше имя' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Фамилия"
              rules={[{ required: true, message: 'Пожалуйста, введите вашу фамилию' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="birthdate"
              label="Дата рождения"
              rules={[{ required: true, message: 'Пожалуйста, выберите вашу дату рождения' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Пол"
              rules={[{ required: true, message: 'Пожалуйста, выберите ваш пол' }]}
            >
              <Radio.Group>
                <Radio value="male">Мужской</Radio>
                <Radio value="female">Женский</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              label="Номер телефона"
              rules={[{ required: true, message: 'Пожалуйста, введите ваш номер телефона' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Почта"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Пароль"
              rules={[{ required: true, message: 'Пожалуйста, введите пароль' }]}
            >
              <Input.Password />
            </Form.Item>
          </>
        )}
        {section === 'login' && (
          <>
            <Form.Item
              name="email"
              label="Почта"
              rules={[{ required: true, message: 'Пожалуйста, введите вашу почту' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Пароль"
              rules={[{ required: true, message: 'Пожалуйста, введите пароль' }]}
            >
              <Input.Password />
            </Form.Item>
          </>
        )}
      </Form>
    </Modal>
  );
};

export default RegistrationModal;