const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./image/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./image/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./image/bao.png", datCuoc: false },
  ],
  ketQua: "I'm iron man, I love you 3000!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./image/keo.png" },
};

const oanTuTiRedux = (state = stateDefault, action) => {
  switch (action.type) {
    //reset mang cuoc
    case "DAT_CUOC": {
      let mangDatCuocUpdate = [...state.mangDatCuoc];
      // tao mang cuoc moi
      mangDatCuocUpdate = mangDatCuocUpdate.map((item, index) => {
        //tim ra maCuoc de doi trang thai cuoc ung voi ma cuoc do
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangDatCuocUpdate;
      console.log(mangDatCuocUpdate);

      return { ...state };
    }

    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }

    case "END_GAME": {
      state.soBanChoi += 1;
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo":
          {
            if (computer.ma === "keo") {
              state.ketQua = "Hòa nhau !!!";
            } else if (computer.ma === "bua") {
              state.ketQua = "Bạn thua rồi !!!";
            } else {
              state.soBanThang += 1;
              state.ketQua = "I'm iron man, I love you 3000!!";
            }
          }
          break;

        case "bua":
          {
            if (computer.ma === "keo") {
              state.soBanThang += 1;
              state.ketQua = "I'm iron man, I love you 3000!!";
            } else if (computer.ma === "bua") {
              state.ketQua = "Hòa nhau !!!";
            } else {
              state.ketQua = "Bạn thua rồi !!!";
            }
          }
          break;
        case "bao":
          {
            if (computer.ma === "keo") {
              state.ketQua = "Bạn thua rồi !!!";
            } else if (computer.ma === "bua") {
              state.soBanThang += 1;
              state.ketQua = "I'm iron man, I love you 3000!!";
            } else {
              state.ketQua = "Hòa nhau !!!";
            }
          }
          break;
        default:
          state.ketQua = "I'm iron man, I love you 3000!!";
          return { ...state };
      }

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default oanTuTiRedux;
