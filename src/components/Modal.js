// import Close from './times-solid.svg';
import { FaTimes } from 'react-icons/fa';
import './Modal.scss';
import { useState } from 'react';

const Modal = ({ show, close, onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('please put text');
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);

    close();
  };
  return (
    <>
      {show ? (
        <div className="modalContainer">
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title">Add Task</h2>
              <FaTimes
                className="close"
                onClick={() => close()}
                style={{ cursor: 'pointer' }}
              />
            </header>
            {/* <main className="modal_content">This is modal content</main> */}
            <form className="add-form" onSubmit={onSubmit}>
              <div className="form-control">
                <label>Task</label>
                <input
                  type="text"
                  placeholder="Add Task"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  style={{ backgroundColor: '#f4f4f4' }}
                />
              </div>
              <div className="form-control">
                <label>Day</label>
                <input
                  type="text"
                  placeholder="Day"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  style={{ backgroundColor: '#f4f4f4' }}
                />
              </div>
              <div className="form-control form-control-check">
                <label>Reminder</label>
                <input
                  type="checkbox"
                  placeholder="Set Reminder"
                  value={reminder}
                  checked={reminder}
                  onChange={(e) => setReminder(e.currentTarget.checked)}
                  style={{ backgroundColor: 'mistyrose' }}
                />
              </div>
              <input
                type="submit"
                value="Save Task"
                className="btn btn-block"
                style={{ backgroundColor: 'lightslategray' }}
              />
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
