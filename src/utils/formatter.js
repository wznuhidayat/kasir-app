export function formattedPrice(angka, prefix) {
    if (angka.toString().charAt(0) === '0') {
        angka = angka.toString().substring(1);
    }
    var number_string = angka.toString().replace(/[^,\d]/g, "");
    var split = number_string.split(",");
    var sisa = split[0].length % 3;
    var rupiah = split[0].substr(0, sisa);
    var ribuan = split[0].substr(sisa).match(/\d{3}/g);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
        var separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
    return prefix === undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
}
import moment from 'moment';
export function parseDate(dateTime) {
    const parsedDate = moment(dateTime, 'YYYY-MM-DD HH:mm:ss.SSS');
    const formattedDate = parsedDate.format('HH:mm DD/MM/YYYY')
    return formattedDate;
}
