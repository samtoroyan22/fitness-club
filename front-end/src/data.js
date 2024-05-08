// images
import Logo from '../src/assets/img/header/logo.svg';
import ResistanceImg from '../src/assets/img/workouts/resistance.png';
import BoxingImg from '../src/assets/img/workouts/boxing.png';
import BodyPumpImg from '../src/assets/img/workouts/body-pump.png';
import YogaImg from '../src/assets/img/workouts/yoga.png';
import FullBodyImg from '../src/assets/img/workouts/full-body.png';
import FitnessImg from '../src/assets/img/workouts/fitness.png';
import BattleRopeImg from '../src/assets/img/workouts/battle-rope.png';
import CommunityImg1 from '../src/assets/img/community/img1.png';
import CommunityImg2 from '../src/assets/img/community/img2.png';
import CommunityImg3 from '../src/assets/img/community/img3.png';
import CommunityImg4 from '../src/assets/img/community/img4.png';
import JoinImg from '../src/assets/img/join/woman.png';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import { BsInstagram, BsFacebook, BsTelegram, BsWhatsapp } from 'react-icons/bs';

export const header = {
  logo: Logo,
  btnLoginText: 'Войти',
  btnSignupText: 'Регистрация',
};

export const nav = [
  { name: 'Главня', href: 'home' },
  { name: 'О клубе', href: 'about' },
  { name: 'Тренировки', href: 'workouts' },
  { name: 'Расписание', href: 'timetable' },
  { name: 'Персонал', href: 'community' },
  { name: 'Цены', href: 'pricing' },
  { name: 'Контакты', href: 'contact' },
];

export const banner = {
  titlePart1: 'Сила. Гибкость.',
  titlePart2: 'Уверенность.',
  subtitle:
    'Готовы ли вы принять вызов и стать лучшей версией себя? Тогда нажмите на кнопку!',
  textBtn: 'Записаться',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'Наша',
  title2: 'миссия',
  subtitle1:
    'Наша миссия - вдохновлять и поддерживать каждого, кто решает изменить себя к лучшему. Мы уникальны благодаря непревзойденной мотивирующей атмосфере, квалифицированному персоналу и передовому оборудованию, которое помогает нашим участникам достигать своих индивидуальных фитнес-целей.',
  subtitle2:
    'Сила нашей искренней идентичности используется для вдохновения каждого, кто ступает на порог наших залов, чтобы стать лучше себя.',
  link: 'Присоединяйся сейчас',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Программы',
  title2: 'тренировок',
  programs: [
    {
      image: ResistanceImg,
      name: 'Кроссфит',
    },
    {
      image: BoxingImg,
      name: 'Бокс',
    },
    {
      image: BodyPumpImg,
      name: 'Силовые упражнения',
    },
    {
      image: YogaImg,
      name: 'Йога',
    },
    {
      image: FullBodyImg,
      name: 'Пилатес',
    },
    {
      image: FitnessImg,
      name: 'Аэробика',
    },
    {
      image: BattleRopeImg,
      name: 'Легкая атлетика',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Цены на',
  title2: 'абонементы ',
  plans: [
    {
      name: 'Лайт',
      price: '1490',
      list: [
        { name: 'Доступ в клуб не более 5 раз в месяц' },
        { name: 'Тренажерный зал' },
        { name: 'Групповые тренировки' },
        { name: 'Персональная тренировка с тренером' },
        { name: 'Скидка 5% по программе лояльности' },
        { name: 'Финские сауны и хаммам' },
      ],
      delay: 600,
    },
    {
      name: 'Стандарт',
      price: '2490',
      list: [
        { name: 'Безлимитный доступ только в один клуб' },
        { name: 'Тренажерный зал' },
        { name: 'Групповые тренировки ' },
        { name: 'Персональная тренировка с тренером' },
        { name: 'Скидка до 20% по программе лояльности' },
        { name: 'Финские сауны и хаммам' },
      ],
      delay: 800,
    },
    {
      name: 'Премиум',
      price: '3990',
      list: [
        { name: 'Безлимитный доступ во все клубы' },
        { name: 'Тренажерный зал' },
        { name: 'Групповые тренировки ' },
        { name: 'Персональная тренировка с тренером' },
        { name: 'Скидка до 35% по программе лояльности' },
        { name: 'Финские сауны и хаммам' },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Персонал',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Александр Иванов',
      message:
        '“Опытный тренер кроссфита, готов помочь вам преодолеть свои границы и достичь новых высот.”',
    },
    {
      image: CommunityImg3,
      name: 'Игорь Войтенко',
      message:
        '“Эксперт по силовым упражнениям, который поможет вам сформировать крепкое и выносливое тело.”',
    },
    {
      image: CommunityImg2,
      name: 'Елена Смирнова',
      message:
        '“Сертифицированный инструктор йоги, направленный на достижение гармонии и баланса в теле и разуме.”',
    },
    {
      image: CommunityImg3,
      name: 'Дмитрий Петров',
      message:
        '“Профессиональный боксер и инструктор, поможет вам освоить технику ударов и повысить свою выносливость.”',
    },
    {
      image: CommunityImg4,
      name: 'Анастасия Козлова',
      message:
        '“Инструктор по пилатесу, помогающий укрепить мышцы, улучшить осанку и повысить гибкость.”',
    },
        {
      image: CommunityImg1,
      name: 'Мария Волкова',
      message:
        '“Профессиональный тренер по аэробике, который вдохновит вас на энергичные и результативные тренировки.”',
    },
    {
      image: CommunityImg2,
      name: 'Ольга Новикова',
      message:
        '“Опытный тренер легкой атлетики, помогающий развить скорость, выносливость и координацию движений.”',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: 'Готовы начать',
  title2: 'день c энергии',
  title3: 'и уверенности?',
  subtitle:
    'Мы будем держать вас в курсе всего, что вам нужно знать о нас. Ни больше, ни меньше.',
  btnText: 'Стать сильнее',
};

export const footer = {
  logo: Logo,
  copyrightText: 'Все права защищены 2024.',
  icons: [BsInstagram, BsFacebook,  BsTelegram,  BsWhatsapp]
};

export const daysOfWeek = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскрксенье'
];

export const timetableRows = [
  {
    time: "08:00 - 10:00",
    events: [
      { type: "workout", title: "Кроссфит", instructor: "Александр Иванов" },
      {},
      { type: "fitness", title: "Аэробика", instructor: "Ольга Новикова" },
      {},
      { type: "workout", title: "Бокс", instructor: "Елена Смирнова" },
      {},
      { type: "fitness", title: "Силовые упражнения", instructor: "Дмитрий Петров" }
    ]
  },
  {
    time: "10:00 - 12:00",
    events: [
      { type: "workout", title: "Пилатес", instructor: "Мария Волкова" },
      { type: "fitness", title: "Легкая атлетика", instructor: "Игорь Сергеев" },
      {},
      { type: "workout", title: "Йога", instructor: "Анастасия Козлова" },
      { type: "fitness", title: "Аэробика", instructor: "Ольга Новикова" },
      {},
      {},
    ]
  },
  {
    time: "14:00 - 16:00",
    events: [
      { type: "workout", "title": "Кроссфит", instructor: "Александр Иванов" },
      {},
      {},
      { type: "fitness", "title": "Аэробика", instructor: "Ольга Новикова" },
      { type: "workout", "title": "Бокс", instructor: "Елена Смирнова" },
      {},
      { type: "fitness", "title": "Силовые упражнения", instructor: "Дмитрий Петров" }
    ]
  },
  {
    time: "16:00 - 18:00",
    events: [
      {},
      { type: "workout", title: "Пилатес", instructor: "Мария Волкова" },
      {},
      { type: "fitness", title: "Легкая атлетика", instructor: "Игорь Сергеев" },
      { type: "workout", title: "Йога", instructor: "Анастасия Козлова" },
      { type: "fitness", title: "Аэробика", instructor: "Ольга Новикова" },
      {},
    ]
  },
  {
    time: "18:00 - 20:00",
    events: [
      { type: "workout", title: "Кроссфит", instructor: "Александр Иванов" },
      { type: "fitness", title: "Аэробика", instructor: "Ольга Новикова" },
      { type: "workout", title: "Бокс", instructor: "Елена Смирнова" },
      {},
      {},
      { type: "fitness", title: "Силовые упражнения", instructor: "Дмитрий Петров" },
      {},
    ]
  },
  {
    time: "18:00 - 20:00",
    events: [
      { type: "workout", title: "Пилатес", instructor: "Мария Волкова" },
      {},
      { type: "fitness", title: "Легкая атлетика", instructor: "Игорь Сергеев" },
      {},
      { type: "workout", title: "Йога", instructor: "Анастасия Козлова" },
      {},
      { type: "fitness", title: "Аэробика", instructor: "Ольга Новикова" },
    ]
  }
]
;