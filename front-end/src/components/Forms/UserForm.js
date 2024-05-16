import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Avatar, Button, message, Card, List, Form, Input, DatePicker, Radio, Typography, Table, Tag } from 'antd';
import { UserOutlined, LogoutOutlined, EditOutlined, NotificationOutlined, ScheduleOutlined, CreditCardOutlined } from '@ant-design/icons';
import './UserForm.css';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const UserForm = () => {
  const [user, setUser] = useState({});
  const [currentTab, setCurrentTab] = useState('main');
  const [notifications, setNotifications] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [payments, setPayments] = useState([]);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
      setNotifications([
        { id: 1, message: 'Тренировка на 12:00 подтверждена', date: '20.01.2023' },
        { id: 2, message: 'Напоминание: Занятие 25.01.2023', date: '23.01.2023' },
      ]);
      setSchedule([
        { id: 1, title: 'Групповая тренировка', trainer: 'Иван Петров', date: '12 мая, 12:00', status: 'Записан' }
      ]);
      setPayments([
        { id: 1, type: 'Абонемент', amount: '5000 ₽', date: '15.01.2023', status: 'Оплачено' },
        { id: 2, type: 'Разовая тренировка', amount: '1000 ₽', date: '18.01.2023', status: 'Оплачено' },
      ]);
    } else {
      message.error("No user data found. Please log in again.");
      navigate('/');
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    message.success("You have been logged out.");
    navigate('/');
  };

  const handleEditProfile = (values) => {
    const updatedUser = { ...user, ...values };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    message.success('Profile updated successfully');
    setCurrentTab('main');
  };

  const menuItems = [
    { key: 'main', icon: <UserOutlined />, label: 'Главное' },
    { key: 'editProfile', icon: <EditOutlined />, label: 'Личные данные' },
    { key: 'notifications', icon: <NotificationOutlined />, label: 'Уведомления' },
    { key: 'schedule', icon: <ScheduleOutlined />, label: 'Расписание' },
    { key: 'payments', icon: <CreditCardOutlined />, label: 'Оплата' },
    { key: 'logout', icon: <LogoutOutlined />, label: 'Выход', onClick: logout }
  ];

  const renderContent = () => {
    switch (currentTab) {
      case 'main':
        return (
          <Card title="Главное">
            <Card title="Расписание" style={{ marginTop: 16 }}>
              <Table dataSource={schedule.map(item => ({ ...item, key: item.id }))} columns={[
                { title: 'Занятие', dataIndex: 'title', key: 'title' },
                { title: 'Тренер', dataIndex: 'trainer', key: 'trainer' },
                { title: 'Дата', dataIndex: 'date', key: 'date' },
                { title: 'Статус', dataIndex: 'status', key: 'status', render: status => <Tag color="blue">{status}</Tag> },
              ]} />
            </Card>
            <Card title="Уведомления" style={{ marginTop: 16 }}>
              <List
                itemLayout="horizontal"
                dataSource={notifications}
                renderItem={item => (
                  <List.Item key={item.id}>
                    <List.Item.Meta
                      title={item.message}
                      description={item.date}
                    />
                  </List.Item>
                )}
              />
            </Card>
            <Card title="Абонементы и платежи" style={{ marginTop: 16 }}>
              <Table dataSource={payments.map(item => ({ ...item, key: item.id }))} columns={[
                { title: 'Тип', dataIndex: 'type', key: 'type' },
                { title: 'Сумма', dataIndex: 'amount', key: 'amount' },
                { title: 'Дата', dataIndex: 'date', key: 'date' },
                { title: 'Статус', dataIndex: 'status', key: 'status', render: status => <Tag color="green">{status}</Tag> },
              ]} />
            </Card>
          </Card>
        );
      case 'editProfile':
        return (
          <Card title="Редактировать профиль">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleEditProfile}
              initialValues={user}
            >
              <Form.Item name="firstName" label="Имя" rules={[{ required: true, message: 'Пожалуйста, введите ваше имя' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="lastName" label="Фамилия" rules={[{ required: true, message: 'Пожалуйста, введите вашу фамилию' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="birthdate" label="Дата рождения" rules={[{ required: true, message: 'Пожалуйста, выберите вашу дату рождения' }]}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item name="gender" label="Пол" rules={[{ required: true, message: 'Пожалуйста, выберите ваш пол' }]}>
                <Radio.Group>
                  <Radio value="male">Мужской</Radio>
                  <Radio value="female">Женский</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item name="phoneNumber" label="Номер телефона" rules={[{ required: true, message: 'Пожалуйста, введите ваш номер телефона' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="email" label="Почта" rules={[{ required: true, message: 'Пожалуйста, введите вашу почту' }]}>
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Сохранить</Button>
                <Button style={{ marginLeft: '8px' }} onClick={() => setCurrentTab('main')}>Отмена</Button>
              </Form.Item>
            </Form>
          </Card>
        );
      case 'notifications':
        return (
          <Card title="Уведомления">
            <List
              itemLayout="horizontal"
              dataSource={notifications}
              renderItem={item => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    title={item.message}
                    description={item.date}
                  />
                </List.Item>
              )}
            />
          </Card>
        );
      case 'schedule':
        return (
          <Card title="Расписание">
            <Table dataSource={schedule.map(item => ({ ...item, key: item.id }))} columns={[
              { title: 'Занятие', dataIndex: 'title', key: 'title' },
              { title: 'Тренер', dataIndex: 'trainer', key: 'trainer' },
              { title: 'Дата', dataIndex: 'date', key: 'date' },
              { title: 'Статус', dataIndex: 'status', key: 'status', render: status => <Tag color="blue">{status}</Tag> },
            ]} />
          </Card>
        );
      case 'payments':
        return (
          <Card title="Оплата">
            <Table dataSource={payments.map(item => ({ ...item, key: item.id }))} columns={[
              { title: 'Тип', dataIndex: 'type', key: 'type' },
              { title: 'Сумма', dataIndex: 'amount', key: 'amount' },
              { title: 'Дата', dataIndex: 'date', key: 'date' },
              { title: 'Статус', dataIndex: 'status', key: 'status', render: status => <Tag color="green">{status}</Tag> },
            ]} />
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" selectedKeys={[currentTab]} items={menuItems} onClick={({ key }) => setCurrentTab(key)} />
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0, background: '#fff', margin: 30 }}>
          <div className="header-content">
            <Avatar size={64} icon={<UserOutlined />} />
            <Title level={2} style={{ marginLeft: 16 }}>{`${user.firstName} ${user.lastName}`}</Title>
          </div>
        </Header>
        <Content style={{ margin: '16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {renderContent()}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Sport & Wellness ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default UserForm;
