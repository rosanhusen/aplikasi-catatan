import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {
  getNotes,
  deleteAccessToken,
  deleteNote,
} from "../utils/network";
import TodoList from "../components/TodoList";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  const { username } = useParams();

  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onDeleteHandler = async (id) => {
    const deleteResult = await deleteNote(id);

    if (!deleteResult.error) {
      // Jika penghapusan berhasil, jalankan getNotes kembali
      const getNotesResult = await getNotes();

      if (!getNotesResult.error) {
        setTodos(getNotesResult.data);
      } else {
        console.error(
          "Error fetching notes after deletion:",
          getNotesResult.code
        );
      }
    } else {
      console.error("Error deleting note:", deleteResult.code);
    }
  };

  function onLogoutHandler(event) {
    event.preventDefault();
    // TODO HANDLE LOGOUT HERE
    const isConfirmed = window.confirm("Apakah Anda yakin?");
    if (isConfirmed) {
      deleteAccessToken();
      navigate("/");
    }
  }

  useEffect(() => {
    getNotes()
      .then((result) => {
        const data = result.data;
        setTodos(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="p-3">
      <strong className="fs-1 text-light">Aplikasi Catatan</strong>
      <br />
      <Button
        className="col-12 mb-2 btn-outline-primary text-center"
        variant="light"
        type="submit"
        onClick={() => {
          navigate(`/${username}/add`);
        }}
      >
        Tambah Catatan
      </Button>
      <input
        className="search-bar mb-2 col-12 px-2 "
        type="text"
        onChange={(event) => {
          handleChangeSearch(event);
        }}
        value={search}
        placeholder="Cari Berdasarkan Judul..."
      />
      <div className="danger">
              <button
                onClick={(event) => {
                  onLogoutHandler(event);
                }}
              >
                Logout
              </button>
        </div>
      <div>
        <TodoList todos={filteredTodos} onDelete={onDeleteHandler} />
      </div>
    </div>
  );
}

export default Home;