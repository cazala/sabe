function sabe(name) {
  const filename = `./files/${name}.mp3`;
  const player = require("play-sound")();
  if (require("fs").existsSync(filename)) {
    player.play(`./files/${name}.mp3`, err => {
      if (err) throw new Error("no sabe");
    });
  } else {
    require("download-file")(
      `http://www.celbananero.com/ddik2/force-download.php?file=${
        name
      }_sabe.mp3`,
      {
        directory: "./files",
        filename: `${name}.mp3`
      },
      err => {
        if (err) throw new Error("no sabe");
        player.play(`./files/${name}.mp3`, err => {
          if (err) throw new Error("no sabe");
        });
      }
    );
  }
}

module.exports = sabe;
