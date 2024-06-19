document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nameForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value.trim();

        if (name !== '') {
            var funnyWords = ['tuyul', 'emas', 'mantan', 'katak', 'setan', 'gajah', 'naga', 'belalang', 'titid', 'melayang', 'kentut', 'keriting', 'botak', 'gentayangan', 'berak', 'cebok', 'kelapa', 'sigma', 'rizz', 'kuntilanak', 'pocong'];

            // Memilih dua kata lucu secara acak
            var randomIndex1 = Math.floor(Math.random() * funnyWords.length);
            var randomWord1 = funnyWords[randomIndex1];
            funnyWords.splice(randomIndex1, 1); // Menghapus kata pertama dari array

            var randomIndex2 = Math.floor(Math.random() * funnyWords.length);
            var randomWord2 = funnyWords[randomIndex2];

            // Menyusun teks akhir dengan kata yang diacak berada di belakang
            var displayText = name + ', Khodam kamu adalah: ' + randomWord1 + ' ' + randomWord2;
            document.getElementById('wordDisplay').innerText = displayText;

            // Menghapus nilai dari input nama setelah submit
            document.getElementById('name').value = '';

        } else {
            alert('Silakan masukkan nama Anda terlebih dahulu!');
        }
    });

    // Menghapus nilai dari input nama saat diklik (menggunakan event focus)
    document.getElementById('name').addEventListener('focus', function() {
        this.value = '';
    });
});
