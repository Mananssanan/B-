import React from 'react';
import './App.css'; // Assuming you have a CSS file for custom styling

const App = () => {
  return (
    <div className="dormitory-form">
      <header className="header">
        <div className="logo">Dormitory Web</div>
        <div className="header-options">
          <span className="language">TH | THB ▼</span>
          <span className="search">ค้นหา</span>
          <span className="user">Boomnthat ▼</span>
        </div>
      </header>
      
      <div className="image-gallery">
        <div className="image-box"></div>
        <div className="image-box"></div>
        <div className="image-box"></div>
      </div>
      
      <form className="form">
        <div className="form-group">
          <label htmlFor="room-info">
          <i className="icon-room"></i> ห้องพัก
          </label>
          <textarea id="room-info" rows="4"></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="furniture">
            <i className="icon-furniture"></i> เฟอร์นิเจอร์
          </label>
          <textarea id="furniture" rows="4"></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="contact">
            <i className="icon-contact"></i> ช่องทางติดต่อ
          </label>
          <textarea id="contact" rows="4"></textarea>
        </div>
        
        <div className="form-buttons">
          <button type="button" className="btn-add-doc">เพิ่มเอกสาร</button>
          <button type="submit" className="btn-save">บันทึก</button>
          <button type="button" className="btn-book">จองหอพัก</button>
        </div>
      </form>
      
      <footer className="footer">
        Copyright © 2024 Dormitory. All rights reserved
      </footer>
    </div>
  );
};

export default App;
