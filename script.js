document.addEventListener("alpine:init", () => {
  Alpine.data("AngkaBom", () => ({
    init() {
      this.resetSemua();
    },
    isHint: false,
    bom: null,
    mulaikah: false,
    min: null,
    max: null,
    tebakan: null,

    mulai() {
      this.mulaikah = true;
    },

    cekTebakan() {
      if (this.tebakan == this.bom) {
        Swal.fire({
          title: "Yahh 💔",
          text: this.tebakan + " adalah angka bom... hati ini jadi meledak 😢",
          icon: "error",
        });
        this.resetSemua();
      } else {
        this.setKisaran();
      }
    },

    resetBom() {
      this.bom = Math.floor(Math.random() * 100) + 1;
    },

    resetSemua() {
      this.resetBom();
      this.isHint = false;
      this.min = 1;
      this.max = 100;
      this.tebakan = null;
      this.mulaikah = false;
    },

    setKisaran() {
      if (this.tebakan > this.bom) {
        this.max = this.tebakan - 1;
      } else {
        this.min = parseInt(this.tebakan) + 1;
      }

      if (this.min == this.max) {
        Swal.fire({
          title: "Kita Hampir Berhasil 💕",
          text: "Tapi sayangnya angka bomnya adalah " + this.min,
          icon: "info",
        });
        this.resetSemua();
      } else {
        Swal.fire({
          title: "Selamat 💖",
          text: this.tebakan + " bukan angka bom... kamu berhasil melewati rintangan cintaku",
          icon: "success",
        });
      }

      this.tebakan = null;
    },
  }));
});