//let predios = [[1, 15, 5], [1, 5, 23], [9, 27, 3], [10, 100, 2], [400, 700, 18], [600, 800, 3]];
let predios = [[1, 5, 11], [2, 7, 6], [3, 9, 13], [12, 16, 7], [14, 25, 3], [19, 22, 18], [23, 29, 13], [24, 28, 4]];
let photo = [];
let aux = [];
let altura = predios[0][2];
let fim = predios[0][1];
let ini = 0;
for (j = 0; j <= predios.length - 1; j++) {
  for (i = 0; i <= predios.length - 1; i++) {
    if (predios[j][0] < predios[i][0]) {
      aux = predios[j];
      predios[j] = predios[i];
      predios[i] = aux;
    }
  }
}
photo.push(predios[0][0]);
photo.push(predios[0][2]);
photo.push(predios[0][1]);

for (i = 0; i < predios.length; i++) {
  if (predios[i][0] <= photo[photo.length - 1] &&
    predios[i][2] > photo[photo.length - 2]) {
    photo[photo.length - 1] = predios[i][0];
    photo.push(predios[i][2]);
    photo.push(predios[i][1]);
  } else if (predios[i][0] > photo[photo.length - 1]) {
    if ((fim < predios[i][1] && fim > predios[i][0]) && (altura != predios[i][2])) {
      photo.push(altura);
      if (altura > predios[i][2]) {
        photo.push(fim);
      } else {
        photo.push(predios[i][0]);
      }
    } else if (fim > predios[i][1] && (altura > predios[i][2])) {
      photo.push(altura);
      photo.push(predios[i][0]);

    } else if (fim < predios[i][0] && fim > photo[photo.length - 1]) {
      photo.push(altura);
      photo.push(fim);
      photo.push(0);
      photo.push(predios[i][0]);
    } else {
      photo.push(0);
      photo.push(predios[i][0]);
    }
    photo.push(predios[i][2]);
    photo.push(predios[i][1]);
  } else if (predios[i][0] < photo[photo.length - 1] &&
    predios[i][1] > photo[photo.length - 1]) {
    fim = predios[i][1];
    altura = predios[i][2];
    if (altura > photo[photo.length - 2]) {
      photo[photo.length - 1] = predios[i][0];
      photo.push(predios[i][2]);
      photo.push(predios[i][1]);
    } else if (i + 1 >= predios.length - 1) {
      photo.push(predios[i][2]);
      photo.push(predios[i][1]);
    } else if (altura < photo[photo.length - 2] &&
      altura < predios[i + 1][2] && fim > predios[i + 1][1]) {
      photo.push(altura);
      photo.push(predios[i + 1][0]);
      photo.push(predios[i + 1][2]);
      photo.push(predios[i + 1][1]);
    }
  }
}
photo.push(0);
console.log(photo);