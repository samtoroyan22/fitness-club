import React from 'react';
import './Timetable.css';
import Time from '../assets/img/tabletime/icons/timetable.svg';
import {timetableRows, daysOfWeek} from '../data';

function Timetable() {
  return (
    <section id='timetable' className='section pb-[80px] pt-[80px] md:pb-[110px] md:pt-[110px] lg:pb-[120px] lg:pt-[120px]'>
        <div data-aos='fade-up' data-aos-delay='100' className="section-title-group max-x-[540px] mx-auto px-4 lg:px-0">
            <img src={Time} alt=''/>
            <h2 className='h2 section-title'>Найди &nbsp; <span className='text-primary-200'> время</span></h2>
        </div>
        <div className="class-timetable" data-aos='fade-up' data-aos-delay='500' data-aos-offset='200'>
            <table>
            <thead>
                <tr>
                    <th></th>
                    {daysOfWeek.map(day => (
                        <th key={day}>{day}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {timetableRows.map((row, index) => (
                <tr key={index}>
                    <td className="class-time">{row.time}</td>
                    {row.events.map((event, idx) => (
                    <td key={idx} className='dark-bg hover-bg ts-meta' data-tsmeta={event.type}>
                        <h5>{event.title}</h5>
                        <span>{event.instructor}</span>
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </section>
  );
}

export default Timetable;
