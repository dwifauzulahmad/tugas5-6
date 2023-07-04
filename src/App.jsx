// import React from 'react';
import { useState, useRef } from "react";
import Electronic from "./components/Electronic";
import "./index.css";
import Header from "./components/Header";

function App() {
  const [electronic, setElectronic] = useState([
    {
      id: 1,
      nama: "Hp",
      harga: 22000000,
    },
    {
      id: 2,
      nama: "Tv",
      harga: 15000000,
    },
    {
      id: 3,
      nama: "Laptop",
      harga: 30000000,
    },
  ]);
  const id = useRef(4);
  const [addHp, setAddHp] = useState("");
  const [addHarga, setAddHarga] = useState("");
  const [putId, setPutId] = useState("");
  const [putNama, setPutNama] = useState("");

  return (
    <>
      <Header />
      <div>
        <div id="container">
          {electronic.map((e, i) => {
            return (
              <Electronic key={i} id={e.id} nama={e.nama} harga={e.harga} />
            );
          })}
        </div>
        <div className="seluruh-container">
          <form>
            <div className="box-1">
              <label>
                <h2>Tambah</h2>
                ID:
              </label>
              <input
                type="number"
                value={id.current}
                onChange={(e) => setAddHp(e.target.value)}
              />
              <label>Nama:</label>
              <input value={addHp} onChange={(e) => setAddHp(e.target.value)} />
              <label>Harga:</label>
              <input
                value={addHarga}
                onChange={(e) => setAddHarga(e.target.value)}
              />
              <div className="button-1">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setElectronic([
                      {
                        id: id.current++,
                        nama: addHp,
                        harga: addHarga,
                      },
                      ...electronic,
                    ]);
                  }}
                >
                  + Depan
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setElectronic([
                      ...electronic,
                      {
                        id: id.current++,
                        nama: addHp,
                        harga: addHarga,
                      },
                    ]);
                  }}
                >
                  + Belakang
                </button>
              </div>
            </div>
          </form>
          <form>
            <div className="box-2">
              <label htmlFor="">
                ID :
                <input
                  type="number"
                  value={putId}
                  onChange={(e) => setPutId(parseInt(e.target.value))}
                />
                Nama :
                <input
                  type="text"
                  value={putNama}
                  onChange={(e) => setPutNama(e.target.value)}
                />
              </label>
              <div className="jarak">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setElectronic(
                      electronic.map((p) =>
                        p.id == putId ? { ...p, nama: putNama } : p
                      )
                    );
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setElectronic(electronic.filter((p) => p.id != putId));
                  }}
                >
                  Hapus By Index
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setElectronic(
                      electronic.map((p) =>
                        p.id == putId ? { ...p, harga: p.harga + 1 } : p
                      )
                    );
                  }}
                >
                  Tambah Harga
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setElectronic(
                      electronic.map((p) =>
                        p.id == putId ? { ...p, harga: p.harga - 1 } : p
                      )
                    );
                  }}
                >
                  Kurangi Harga
                </button>
              </div>
            </div>
          </form>
          <form>
            <div className="box-hapus">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setElectronic(electronic.slice(1));
                }}
              >
                Hapus Depan
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setElectronic(electronic.slice(0, -1));
                }}
              >
                Hapus Belakang
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setElectronic(electronic.slice(0, 0));
                }}
              >
                Hapus Semua
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
