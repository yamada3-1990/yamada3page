import React, { useState } from 'react';
import './about.css';

export default function About() {
  // 言語状態の管理
  const [language, setLanguage] = useState('en');



  // 言語ごとのテキスト
  const texts = {
    en: {
      title: 'About Page',
      description: 'This is the about section.',
      name: 'Name:',
      skill: 'Skill:',
      skl1: 'python',
      skl2: 'blender',
      qualification: 'Qualification etc.:',
      hobby: 'Hobby:',
      links: 'Links:',
    },
    ja: {
      title: '概要ページ',
      description: 'これは概要セクションです。',
      name: '名前:',
      skill: 'スキル:',
      skl1: 'python',
      skl2: 'blender',
      qualification: '資格など:',
      hobby: '趣味:',
      links: 'リンク:',
    },
  };

  texts.en.skills = ['python', 'blender', 'React', 'JavaScript', 'Spline', 'C', 'HTML/CSS', 'Processing', 'Java', 'GitHub', 'Go', 'Vite'];
  texts.ja.skills = ['python', 'blender', 'React', 'JavaScript', 'Spline', 'C', 'HTML/CSS', 'Processing', 'Java', 'GitHub', 'Go', 'Vite'];

  texts.en.qualifications = ['TOEIC 830', 'Hazardous Materials Engineer in Class B Group 4', 'EIKEN grade 2', 'FE(Fundamental Information Technology Engineer Examination)', 'GCI 2023 Summer'];
  texts.ja.qualifications = ['TOEIC 830', '危険物取扱者乙種第4類', '英検2級', '基本情報技術者試験', 'GCI 2023 Summer'];
  // 特定の言語に切り替える関数
  const switchToJa = () => setLanguage('ja');
  const switchToEn = () => setLanguage('en');

  return (
    
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <div >
        <button onClick={switchToJa} disabled={language === 'ja'}>
          JA
        </button>
        <button onClick={switchToEn} disabled={language === 'en'}>
          EN
        </button>
        <h1>{texts[language].title}</h1>
        <p>{texts[language].description}</p>
      </div>

      <p>{texts[language].name}</p>

      {/* スキル */}
      <div className="skills-container">
        <p>{texts[language].skill}</p>
        <ul className="skills-list">
          {texts[language].skills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
          {/* <span className="skill-icons--blender-dark"></span> */}
        </ul>
      </div>

      {/* 資格 */}
      <div className="skills-container">
        <p>{texts[language].qualification}</p>
        <ul className="skills-list">
          {texts[language].qualifications.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>

      <p>{texts[language].hobby}</p>
      <p>{texts[language].links}</p>
    </div>
  );
}
