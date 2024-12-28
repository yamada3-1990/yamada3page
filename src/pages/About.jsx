import React, { useState } from 'react';
import './about.css';

export default function About() {
  // 言語状態の管理
  const [language, setLanguage] = useState('en');
  const [isChecked, setIsChecked] = useState(false); // チェック状態を管理

  // 言語ごとのテキスト
  const texts = {
    en: {
      title: 'About Page',
      description: 'This is the about section.',
      name: 'Name',
      skill: 'Skill',
      skl1: 'python',
      skl2: 'blender',
      qualification: 'Qualification etc.',
      links: 'Links',
      skills: ['python', 'blender', 'JavaScript', 'Spline', 'C', 'HTML/CSS', 'Processing', 'GitHub'],
      qualifications: ['TOEIC 830', 'Hazardous Materials Engineer in Class B Group 4', 'EIKEN grade 2', 'FE(Fundamental Information Technology Engineer Examination)', 'GCI 2024 Summer'],
    },
    ja: {
      title: '概要ページ',
      description: 'これは概要セクションです。',
      name: '名前',
      skill: 'スキル',
      skl1: 'python',
      skl2: 'blender',
      qualification: '資格など',
      links: 'リンク',
      skills: ['python', 'blender', 'JavaScript', 'Spline', 'C', 'HTML/CSS', 'Processing', 'GitHub'],
      // 'python', 'blender', 'React', 'JavaScript', 'Spline', 'C', 'HTML/CSS', 'Processing', 'Java', 'GitHub', 'Go', 'Vite'
      qualifications: ['TOEIC 830', '危険物取扱者乙種第4類', '英検2級', '基本情報技術者試験', 'GCI 2024 Summer'],
    },
  };

  // トグルスイッチを操作する関数
  const handleToggle = () => {
    setIsChecked(!isChecked);
    setLanguage(isChecked ? 'en' : 'ja'); // チェック状態に応じて言語を切り替え
  };

  return (
    <div className="container">
      <div className="fixed-button">
        <label className="toggle-button-4">
          <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        </label>
      </div>

      <div className='wip'>
        !! 工事中 !!
      </div>
      <div className='skills-container'>
        <p>yamada3</p>
      </div>

      {/* スキル */}
      <div className="skills-container">
        <p>{texts[language].skill}</p>
        <ul className="skills-list">
          {texts[language].skills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
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

      {/* リンク */}
      <div className='skills-container'>
        <p>{texts[language].links}</p>
      </div>
      <div className='links'>
        <a href="https://twitter.com/yamada468389292" target="_blank" alt="twitter/X">
          <span className="prime--twitter"></span>
        </a>
        <a href="https://github.com/yamada3-1990" target="_blank" alt="github">
          <span className="simple-icons--github"></span>
        </a>
        <a href="https://leetcode.com/u/9ByMC79sGV/" target="_blank" alt="leetcode">
          <span className="simple-icons--leetcode"></span>
        </a>
      </div>
    </div>
  );
}
