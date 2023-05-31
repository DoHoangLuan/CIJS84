import logo from './logo.svg';
import './App.css';
import InputCustom from './Component/InputCustom';
import useHook from './Component/useHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan,faPen } from '@fortawesome/free-solid-svg-icons'

function App() {
  const dataRadio = [
    { key: 1, value: "Nam" },
    { key: 2, value: "Nữ" },
  ]
  const { people, handleName, lists, submitListName, deleteListName,fixListName,result,updateListName } = useHook()
  return (
    <div className="App">
      <div>
        <label>Họ</label>
        <InputCustom
          type="text"
          name="LastName"
          value={people.LastName}
          handleName={(e) => handleName(e, 'LastName')}
        />
        <label>Tên</label>
        <InputCustom
          type="text"
          name="FirstName"
          value={people.FirstName}
          handleName={(e) => handleName(e, 'FirstName')} />
        <div className="radio">
          <label>Giới tính</label>
          <div>
            {
              dataRadio.map(element => (
                <InputCustom
                  type="radio"
                  name="Gender"
                  value={element.value}
                  label={element.value}
                  checked={people.Gender === element.value}
                  handleName={(e) => handleName(e, 'Gender')}
                />
              ))
            }
          </div>
        </div>
        <div>
          {result ? (
            <button className="btn" onClick={submitListName}>Thêm</button>
          ) :
            <button className="btn" onClick={updateListName}>Cập nhật</button>

          }
        </div>
      </div>
      <div >
        <table >
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và Tên</th>
              <th>Giới tính</th>
              <th>Thay đổi</th>
              <th>Xoá</th>
            </tr>
          </thead>
          <tbody >
            {lists.map((list, index) => {
              console.log(list);
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{list.LastName} {list.FirstName}</td>
                  <td >{list.Gender}</td>
                  <td><button onClick={() =>fixListName(list.Id)}><FontAwesomeIcon icon={faPen} /></button></td>
                  <td ><button onClick={() => deleteListName(list.Id)}><FontAwesomeIcon icon={faTrashCan} /></button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
