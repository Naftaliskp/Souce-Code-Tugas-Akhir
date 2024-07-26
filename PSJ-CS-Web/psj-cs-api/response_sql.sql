-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2024 at 09:19 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cetbot`
--

-- --------------------------------------------------------

--
-- Table structure for table `response_sql`
--

CREATE TABLE `response_sql` (
  `Id` bigint(20) NOT NULL,
  `Label` varchar(50) NOT NULL,
  `Tag` varchar(100) NOT NULL,
  `Response` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `response_sql`
--

INSERT INTO `response_sql` (`Id`, `Label`, `Tag`, `Response`) VALUES
(1, 'Salam', 'Salam Pembuka', 'Halo, Terima kasih telah menghubungi customer service Cluster Puri Surya Jaya. Ada yang bisa saya bantu hari ini?'),
(2, 'Perizinan Fasilitas Umum', 'Fasilitas umum untuk pembuatan rumah ibadah', 'Di Cluster Puri Surya Jaya, kami memiliki kebijakan terkait penggunaan fasilitas umum untuk pembuatan rumah ibadah. Untuk mendukung inklusivitas dan keberagaman di antara penghuni, Cluster Puri Surya Jaya memberikan izin penggunaan fasilitas umum untuk pembuatan rumah ibadah apabila mendapatkan persetujuan minimal 90% dari jumlah total penghuni. Proses persetujuan ini melibatkan musyawarah antarwarga dan koordinasi dengan manajemen cluster untuk memastikan kesepakatan bersama dan meminimalkan potensi konflik.'),
(3, 'Administrasi', 'Perubahan rumah menjadi kantor', 'Di Cluster Puri Surya Jaya, kami mengikuti kebijakan yang menetapkan bahwa rumah hunian tidak diperbolehkan diubah menjadi kantor, karena hal ini tidak sesuai dengan peruntukannya sebagai tempat tinggal. Kebijakan ini diterapkan untuk menjaga karakter dan fungsi utama dari properti perumahan, serta untuk memastikan bahwa lingkungan tetap nyaman dan aman bagi semua penghuni.'),
(4, 'Fasilitas Umum', 'Daftar fasilitas umum', 'Cluster Puri Surya Jaya menyediakan beragam fasilitas umum untuk meningkatkan kualitas hidup penghuninya. Termasuk di dalamnya adalah Splash Waterpark, sebuah taman air yang menyajikan keseruan rekreasi bagi seluruh keluarga. Kami juga menyediakan Sekolah Pembangunan Jaya dengan fasilitas dua tingkat, mulai dari Kelompok Bermain hingga Sekolah Menengah Atas (KB - SMA), yang menawarkan pendidikan berkualitas dalam lingkungan yang aman dan mendukung. Selain itu, terdapat Jogging Track bagi mereka yang peduli akan kesehatan dan aktivitas fisik, serta Masjid sebagai tempat ibadah yang nyaman dan tenang.'),
(5, 'Splash Waterpark', 'Deskripsi Splash Waterpark', 'Splash Waterpark Puri Surya Jaya (SWP) merupakan salah satu fasilitas yang disediakan oleh PT. Jayaland di dalam wilayah pengembangan utama Puri Surya Jaya. SWP terletak di lokasi yang sangat strategis, yaitu di sebelah Barat Sekolah Pembangunan Jaya 2 dan berbatasan langsung dengan area komersial cluster Pasadena di sebelah utara.\n\nSWP didesain dengan berbagai fasilitas yang dapat menambah keceriaan keluarga Anda Ketika berada di dalamnya. Kolam arus, kolam anak-anak dengan fasilitas slide untuk anak dan bak tumpah, kolam ukuran semi Olympic dan juga terdapat tiga waterslide bagi Anda yang sangat menyukai tantangan.\n\nSelain kolam renang, di area SWP juga terdapat ruang fitness, bagi anda yang ingin menjaga kebugaran bisa mengambil kelas aerobic, area multi purpose hall (MPH)yang dapat digunakan untuk bermain bulu tangkis (2 lapangan) atau mungkin ingin mengadakan acara keluarga atau pesta pernikahan, karena kapasitas dari MPH dapat menampung 400 undangan (standing party). Untuk informasi lebih lanjut, silahkan cek di instagram @psj_splashwaterpark'),
(6, 'Splash Waterpark', 'Alamat Splash Waterpark', 'Alamat Splash Waterpark berada di Perumahan, Jl. Puri Surya Jaya Jl. Taman Pasadena No.1, Ketajen, Kec. Gedangan, Kabupaten Sidoarjo, Jawa Timur 61254'),
(7, 'Splash Waterpark', 'Jam operasional Splash Waterpark', 'Splash Waterpark buka setiap hari Selasa - Minggu pukul 09:00 - 17:00 WIB. Senin tutup dikarenakan maintenance'),
(8, 'Splash Waterpark', 'Harga tiket Splash Waterpark', 'Weekday (Selasa - Jumat) : Rp 30.000.00\r\nWeekend (Sabtu - Minggu) : Rp 40.000,00\r\nHoliday Season (Libur panjang, contohnya saat ramadhan, natal, dan libur tahun ajaran baru) : Rp 50.000,00'),
(9, 'Informasi Kontak Edukasi', 'Daftar alamat dan kontak Sekolah Pembangunan Jaya 2', 'Daftar alamat Sekolah Pembangunan Jaya 2:\n- KB-TK PEMBANGUNAN JAYA 2 \nPerumahan Puri Surya Jaya  Taman Pasadena Blok C1/16 Gedangan - Sidoarjo (61254)\nTelp: 031-8012110 \nEmail: info.tkpjsidoarjo@spj.sch.id\n\n- SD PEMBANGUNAN JAYA 2\nPerumahan Puri Surya Jaya Taman Pasadena Blok C3 No.5 Gedangan - Sidoarjo (61254)\nTelp: 031-8010801 \nEmail: info.sdpjsidoarjo@spj.sch.id\n\n- SMP PEMBANGUNAN JAYA 2\nKawasan Taman Vancouver J1/1 Puri Surya Jaya - Gedangan - Sidoarjo (61254)\nTelp: 031-8916362 \nEmail: info.smppjsidoarjo@spj.sch.id\n\n- SMA PEMBANGUNAN JAYA 2\nKawasan Taman Vancouver J1/1 Puri Surya Jaya - Gedangan - Sidoarjo (61254)\nTelp: 031-8917226 \nEmail: info.smapjsidoarjo@spj.sch.id'),
(10, 'Informasi Kontak Edukasi', 'Alamat dan kontak KB TK Pembangunan Jaya 2', 'KB-TK PEMBANGUNAN JAYA 2 beralamat di Perumahan Puri Surya Jaya Taman Pasadena Blok C1/16 Gedangan - Sidoarjo (61254) Telp: 031-8012110 Email: info.tkpjsidoarjo@spj.sch.id'),
(11, 'Informasi Kontak Edukasi', 'Alamat dan kontak SD Pembangunan Jaya 2', 'SD PEMBANGUNAN JAYA 2 beralamat di Perumahan Puri Surya Jaya Taman Pasadena Blok C3 No.5 Gedangan - Sidoarjo (61254) Telp: 031-8010801  Email: info.sdpjsidoarjo@spj.sch.id'),
(12, 'Informasi Kontak Edukasi', 'Alamat dan kontak SMP Pembangunan Jaya 2', 'SMP PEMBANGUNAN JAYA 2 beralamat di Kawasan Taman Vancouver J1/1 Puri Surya Jaya - Gedangan - Sidoarjo (61254) Telp: 031-8916362 Email: info.smppjsidoarjo@spj.sch.id'),
(13, 'Informasi Kontak Edukasi', 'Alamat dan kontak SMA Pembangunan Jaya 2', 'SMA PEMBANGUNAN JAYA 2 beralamat di Kawasan Taman Vancouver J1/1 Puri Surya Jaya - Gedangan - Sidoarjo (61254) Telp: 031-8917226 Email: info.smapjsidoarjo@spj.sch.id'),
(14, 'Fasilitas Olahraga', 'Lokasi jogging track', 'Jogging track yang dimaksud terletak di sepanjang jalan utama Puri Surya Jaya. Didesain khusus untuk kegiatan olahraga lari atau jogging, jalur ini memberikan pengalaman yang menyegarkan bagi para pengguna yang ingin menjaga kesehatan dan kebugaran.'),
(15, 'Aturan lain-lain', 'Aturan parkir', 'Dalam Cluster Puri Surya Jaya, berlaku beberapa aturan terkait parkir guna menjaga tatanan dan ketertiban lingkungan. Berikut adalah panduan singkat terkait parkir di cluster tersebut:\n\n- Parkir di Dalam Garasi:\nPenghuni diharapkan memasukkan kendaraan ke dalam garasi rumah masing-masing untuk menjaga kerapihan dan memberikan perlindungan ekstra.\n\n- Lebih dari Satu Mobil:\nBagi yang memiliki lebih dari satu mobil, disarankan memarkir kendaraan tambahan di depan rumah dengan memperhatikan kelancaran lalu lintas.\n\nDengan mematuhi aturan parkir ini, diharapkan semua penghuni dapat menciptakan lingkungan yang aman, tertib, dan nyaman bersama-sama.'),
(16, 'Program dan Kegiatan', 'Kegiatan komunitas', 'Di Cluster Puri Surya Jaya, kami berusaha untuk menciptakan lingkungan komunitas yang bersemangat dan bersatu. Sebagai bagian dari komitmen kami untuk menjaga keterbukaan dan keterlibatan antarwarga, setiap acara atau kegiatan komunitas yang direncanakan akan dijadwalkan sejalan dengan perayaan hari besar atau momen-momen istimewa lainnya. Untuk memastikan informasi yang tepat dan akurat, kami merencanakan untuk mempublikasikan detail acara di situs web resmi kami setiap kali mendekati pelaksanaan acara.'),
(17, 'Fasilitas Umum', 'Akses WiFi di fasilitas umum', 'Pada setiap cluster, kami menyediakan fasilitas WiFi di tempat umum utama guna memastikan kenyamanan dan konektivitas bagi semua pengunjung.'),
(18, 'Fasilitas Umum', 'Kata sandi WiFi di fasilitas umum', 'Untuk mengakses jaringan WiFi di fasilitas umum, silakan menanyakan ke pengurus cluster masing-masing dan meminta petunjuk serta kata sandi yang diperlukan untuk terhubung ke jaringan tersebut. Setiap pengurus cluster akan menyediakan informasi yang diperlukan untuk memastikan akses yang lancar ke WiFi fasilitas umum.'),
(19, 'Pengelola Cluster', 'Layanan komunikasi pengelola cluster', 'Untuk mendapatkan bantuan atau menjawab pertanyaan lebih lanjut, Anda dapat menghubungi pengelola cluster melalui saluran komunikasi yang telah disediakan. Silakan hubungi kami melalui nomor telepon dan WhatsApp resmi kami di 087790011057. Kami menyediakan layanan komunikasi ini sebagai sarana untuk memberikan dukungan yang cepat, responsif, dan profesional.'),
(20, 'Keamanan dan Keselamatan', 'Fasilitas keamanan', 'Cluster Puri Surya Jaya menyediakan berbagai fasilitas keamanan untuk memberikan tingkat perlindungan yang optimal kepada para penghuninya. Beberapa layanan keamanan yang tersedia di dalam cluster tersebut antara lain adalah:\r\n- Security 24 Jam:\r\nCluster Puri Surya Jaya memiliki sistem keamanan 24 jam yang dijalankan oleh tim keamanan yang terlatih secara profesional. Tim keamanan kami tidak hanya bertanggung jawab untuk memantau keamanan keseluruhan cluster, tetapi juga untuk merespon cepat terhadap setiap potensi ancaman atau insiden keamanan.\r\n- CCTV di Pos Utama:\r\nSistem pengawasan CCTV dipasang secara strategis di pos utama, memastikan pemantauan dan dokumentasi yang cermat terhadap setiap kegiatan yang terjadi di pintu masuk utama cluster.'),
(21, 'Keamanan dan Keselamatan', 'Prosedur melaporkan gangguan keamanan', 'Apabila Anda menemui gangguan keamanan atau kejadian mencurigakan di lingkungan cluster, kami mendorong Anda untuk segera melaporkannya guna menjaga keamanan dan ketertiban bersama. Untuk melaporkan insiden tersebut, Anda dapat menghubungi pihak keamanan di masing-masing cluster secara langsung. Dengan memberikan informasi yang lengkap dan jelas, Anda dapat membantu pihak keamanan untuk menanggapi dan menyelesaikan situasi dengan lebih efektif.'),
(22, 'Aturan lain-lain', 'Kebijakan tentang hewan peliharaan', 'Penghuni diperbolehkan membawa hewan peliharaan mereka, dengan catatan bahwa hewan tersebut tidak menyebabkan ketidaknyamanan bagi tetangga sekitar. Selain itu, penting untuk mencatat bahwa hewan peliharaan harus diawasi dengan baik dan tidak diperbolehkan dilepas sembarangan di dalam cluster, demi keamanan dan kebersihan bersama.'),
(23, 'Perizinan Fasilitas Umum', 'Pengajuan izin acara di fasilitas umum', '\r\nUntuk mengajukan izin acara di area umum, langkah pertama adalah berkoordinasi dengan penghuni sekitar fasilitas umum, memberikan informasi detail tentang rencana acara, dan mendapatkan dukungan serta persetujuan dari mereka. Setelah itu, datang langsung ke pihak pengelola untuk konsultasi dan mendiskusikan rinci rencana acara. Setelah izin diberikan, konfirmasikan kepada penghuni dan pihak pengelola, serta pertahankan komunikasi terbuka untuk menanggapi pertanyaan atau kekhawatiran selama pelaksanaan acara.'),
(24, 'Administrasi', 'Pembatasan renovasi rumah', 'Untuk menjaga keseragaman estetika dan kualitas lingkungan, terdapat beberapa pembatasan terkait renovasi atau perubahan arsitektur rumah di Cluster Puri Surya Jaya. Pembatasan ini mencakup aspek pagar, tampak depan rumah, perubahan/penambahan struktur, dan warna rumah. Untuk memulai proses perubahan, pemilik rumah diharapkan untuk berdiskusi dan mendapatkan izin dari pihak pengelolaan. Pada khususnya, pembatasan untuk pagar adalah tidak boleh lebih dari 1,5 meter, tidak boleh mengubah tampak depan rumah, dan pemilihan warna atau gaya bangunan harus sesuai dengan tema masing-masing cluster. Rincian lebih lanjut dapat diperoleh dengan menghubungi bagian pengelolaan.'),
(25, 'Fasilitas Umum', 'Akses ke fasilitas umum', 'Untuk mengakses fasilitas umum, kami ingin memastikan kenyamanan dan keamanan bagi semua pengguna. Saat ini, kebijakan kami adalah menjadikan semua fasilitas umum terbuka untuk penggunaan umum tanpa memerlukan kartu akses atau kunci khusus. Hal ini kami lakukan untuk memberikan akses yang mudah dan efisien kepada seluruh komunitas. Kami percaya bahwa dengan menjaga fasilitas umum terbuka, kami dapat menciptakan lingkungan yang inklusif dan ramah bagi semua pengguna.'),
(26, 'Keamanan dan Keselamatan', 'Sanksi pelanggaran dalam cluster', 'Cluster ini menerapkan serangkaian kebijakan yang ditujukan untuk memastikan pematuhan terhadap peraturan dan menjaga keamanan serta kenyamanan bersama. Beberapa bentuk pelanggaran dan sanksi yang mungkin diterapkan meliputi:\r\n\r\n- Perubahan Arsitektur:\r\nSanksi: Penahanan deposit.\r\nPenjelasan: Setiap perubahan arsitektur tanpa izin dapat mengakibatkan penahanan deposit sebagai bentuk tanggung jawab terhadap potensi dampak pada lingkungan dan estetika kawasan.\r\n\r\n- Tidak Membayar IPL (Iuran Pengelolaan Lingkungan):\r\nSanksi: Sampah tidak diangkut.\r\nPenjelasan: Pemilik yang tidak membayar IPL mungkin menghadapi konsekuensi berupa penolakan pengangkutan sampah untuk memastikan partisipasi penuh dalam pemeliharaan lingkungan bersama.\r\n\r\n- Merusak Fasilitas Umum (Fasum):\r\nSanksi: Wajib memperbaiki.\r\nPenjelasan: Setiap kerusakan yang disebabkan oleh pelanggaran terhadap fasum harus diperbaiki sesegera mungkin oleh pihak yang bertanggung jawab.'),
(27, 'Keamanan dan Keselamatan', 'Kehilangan kunci rumah', 'Apabila penghuni mengalami kejadian kehilangan kunci rumah, hal tersebut menjadi tanggung jawab masing-masing konsumen pribadi.'),
(28, 'Pengelola Cluster', 'Customer Service Fisik', 'Saat ini di Cluster Puri Surya Jaya tidak terdapat pusat customer service fisik. Namun, untuk kenyamanan dan kelancaran pelayanan, semua keluhan atau pertanyaan dapat dilaporkan langsung ke bagian pengelolaan. Tim pengelolaan kami akan dengan senang hati membantu Anda menyelesaikan segala kebutuhan atau masalah.'),
(29, 'Fasilitas Umum', 'Layanan Transportasi umum', 'Untuk saat ini, tidak terdapat layanan transportasi umum langsung di sekitar Cluster Puri Surya Jaya. Namun, dapat dipertimbangkan alternatif seperti menggunakan stasiun gedangan yang berjarak 1 km dari perumahan, yang memiliki akses langsung ke jalan utama. Dan juga terdapat Terminal Bus Purabaya yang berjarak 4 km.'),
(30, 'Keamanan dan Keselamatan', 'Prosedur kecelakaan atau insiden', 'Dalam situasi kecelakaan atau insiden di area cluster, penting untuk segera mengambil langkah yang tepat guna memastikan keselamatan semua pihak yang terlibat. Langkah pertama yang paling tepat untuk dilakukan adalah dengan menghubungi langsung menghubungi pihak security agar dapat langsung dikoordinasikan dengan pihak terkait. '),
(31, 'Program dan Kegiatan', 'Pertemuan komunitas', 'Pada Cluster Puri Surya Jaya, kami memiliki kebijakan untuk menyelenggarakan pertemuan komunitas rutin guna memperkuat hubungan antarpenduduk dan membahas isu-isu yang relevan. Pengaturan pertemuan ini ditangani oleh pengurus cluster masing-masing, yang bekerja keras untuk menciptakan lingkungan yang nyaman dan harmonis bagi seluruh warga. Kami sarankan untuk menghubungi pengurus cluster terkait untuk detail jadwal dan informasi lebih lanjut.'),
(32, 'Fasilitas Olahraga', 'Daftar Fasilitas olahraga', 'Terdapat fasilitas-fasilitas olahraga yang menawarkan berbagai pilihan untuk mendukung gaya hidup sehat dan aktif. Anda dapat menikmati aktivitas fisik dengan mengunjungi jogging track yang disediakan di sepanjang jalan utama. Selain itu, Splash Waterpark merupakan pilihan menarik bagi mereka yang ingin menggabungkan keseruan air dengan kegiatan olahraga.'),
(33, 'Pengelolaan Lingkungan dan Kebersihan', 'Permintaan khusus kebersihan', 'Untuk permintaan khusus terkait kebersihan area umum, kami menyarankan agar Anda tetap menghubungi pihak pengelolaan terlebih dahulu.'),
(34, 'Pengelola Cluster', 'Informasi nomor darurat', 'Informasi nomor dapat diakses melalui hotline 123, nomor tersebut berisi diantaranya nomor pemadam kebakaran, kepolisian, PLN, PDAM dan lain sebagainya.'),
(35, 'Pengelola Cluster', 'Pengaduan', 'Mengajukan keluhan terkait tetangga atau permasalahan lingkungan merupakan langkah penting dalam menjaga keharmonisan lingkungan tempat tinggal. Ada beberapa cara yang dapat Anda tempuh untuk mengungkapkan keluhan Anda. Pertama, Anda dapat langsung melaporkan keluhan tersebut melalui form pengaduan yang terdapat dalam website penghuni Cluster Puri Surya Jaya. Selain itu, dapat untuk langsung menghubungi pihak pengelolaan.'),
(36, 'Pengelolaan', 'Proyek infrastruktur', 'Dalam waktu dekat, kami berencana untuk melaksanakan proyek pembersihan saluran di setiap cluster dan melakukan perbaikan jalan di seluruh area cluster. Upaya ini bertujuan untuk memastikan kualitas infrastruktur yang optimal bagi semua penghuni.'),
(37, 'Program dan Kegiatan', 'Program daur ulang dan pengelolaan limbah', 'Sayangnya, saat ini tidak terdapat informasi yang tersedia terkait program daur ulang dan pengelolaan limbah di Cluster Puri Surya Jaya. Namun, untuk memperoleh data lebih lanjut atau mengajukan pertanyaan terkait inisiatif lingkungan di cluster ini, disarankan untuk menghubungi pihak pengelola.'),
(38, 'Fasilitas Umum', 'Fasilitas ruang terbuka', 'Pada setiap bagian depan cluster hunian ini, telah disediakan area terbuka berupa taman yang dapat dinikmati oleh penghuni. Kami dengan seksama merancang dan mengembangkan ruang terbuka ini untuk memberikan pengalaman yang nyaman dan menyegarkan bagi setiap individu di dalam cluster.'),
(39, 'Pengelola Cluster', 'Permintaan salinan dokumen peraturan', 'Untuk mendapatkan salinan dokumen peraturan dan ketentuan cluster, silakan menghubungi bagian pengelolaan cluster secara langsung. Jika memungkinkan, pertimbangkan untuk berkunjung langsung ke kantor pengelola cluster untuk mendapatkan salinan dokumen. Ini dapat memudahkan proses dan memberi kesempatan untuk bertanya langsung jika ada pertanyaan tambahan.'),
(40, 'Keamanan dan Keselamatan', 'Prosedur keamanan serius', 'Ketika menghadapi kejadian keamanan serius di area cluster, langkah-langkah yang dapat diambil adalah segera menghubungi tim keamanan di lokasi untuk menanggapi situasi secara cepat dan efektif. Tim keamanan (Security) akan mengevaluasi tingkat urgensi dan kemudian, jika diperlukan, menghubungi pihak kepolisian untuk koordinasi tindakan lebih lanjut. Atau jika dinilai kejadian kemanan tersebut sudah sangat berbahaya, dapat langsung menghubungi pihak kepolisian.'),
(41, 'Aturan lain-lain', 'Aturan parkir tamu', 'Aturan parkir untuk tamu di cluster ini telah diatur dengan seksama guna memastikan ketertiban dan kelancaran arus lalu lintas di sekitar area. Kami menekankan pentingnya untuk menempatkan kendaraan tamu sedemikian rupa sehingga tidak menghalangi jalan dan tidak mengganggu arus lalu lintas utama.Dan juga jika diperlukan, terdapat tempat parkir tambahan untuk pengunjung Cluster Puri Surya Jaya yang disediakan di dekat area pos security pada masing-masing cluster'),
(42, 'Perizinan Fasilitas Umum', 'Penggunaan fasilitas umum malam', 'Pada dasarnya tidak ada peraturan khusus yang membatasi penggunaan fasilitas umum pada waktu malam di Cluster Puri Surya Jaya, kami mengapresiasi dan mendorong penghuni untuk menjaga ketertiban dan kenyamanan sesama warga. Kami berpegang pada prinsip saling menghormati dan bertanggung jawab dalam menggunakan fasilitas umum pada jam malam.'),
(43, 'Pengelolaan', 'Rencana pengembangan infrastruktur', 'Sejauh ini, tidak ada rencana pengembangan infrastruktur di dalam Cluster Puri Surya Jaya. Namun demikian, penting untuk dicatat bahwa ada rencana pengembangan cluster baru di sekitar area perumahan kami.'),
(44, 'Fasilitas Olahraga', 'Kebijakan penggunaan kolam renang', 'Kebijakan Terkait Penggunaan Kolam Renang \r\n- Anak-anak di bawah usia 12 tahun harus didampingi oleh orang dewasa yang bertanggung jawab.\r\n- Penggunaan pelampung wajib untuk anak-anak yang belum bisa berenang.\r\n- Mandi wajib sebelum memasuki kolam renang.\r\n- Dilarang menggunakan kolam renang bagi mereka yang sedang sakit atau memiliki kondisi kesehatan menular.\r\n- Hanya pakaian renang yang diperbolehkan di dalam kolam renang.\r\n- Dilarang menggunakan sepatu di area kolam renang.\r\n- Mainan apung kecil boleh digunakan, namun tidak boleh mengganggu penggunaan kolam renang oleh orang lain.\r\n- Dilarang membawa makanan atau minuman ke area kolam renang.\r\n- Hanya boleh mengonsumsi makanan dan minuman di area yang ditentukan.\r\n- Anggota harus membantu menjaga kebersihan kolam renang dengan membuang sampah pada tempatnya.\r\n- Laporkan segera kepada petugas jika terjadi masalah teknis atau kebersihan yang perlu diperbaiki.'),
(45, 'Keamanan dan Keselamatan', 'Prosedur evakuasi darurat', 'Prosedur evakuasi darurat pada Cluster Puri Surya Jaya menggunakan standar yang sudah umum diterapkan, seperti menerapkan titik kumpul evakuasi dan penanda jalurnya, akses sumber air jika terjadi kebakaran, dan lain sebagainya'),
(46, 'Perizinan Fasilitas Umum', 'Permohonan perubahan fasilitas umum', 'Permohonan untuk mengganti atau memperbarui fasilitas umum di Cluster Puri Surya Jaya dapat dilakukan setelah melakukan diskusi dengan pihak pengelolaan'),
(47, 'Fasilitas Umum', 'Fasilitas penitipan anak', 'Fasilitas penitipan anak tidak tersedia di dalam Cluster Puri Surya Jaya'),
(48, 'Pengelolaan', 'Rencana pengembangan transportasi umum', 'Dalam waktu dekat belum ada rencana untuk pengembangan fasilitas transportasi umum di dekat cluster'),
(49, 'Fasilitas Umum', 'Fasilitas kesehatan', 'Terdapat beberapa fasilitas kesehatan di sekitar cluster, yaitu Puskesmas Gedangan, RS Mitra Keluarga dan RSIA Mitra Husada'),
(50, 'Fasilitas Umum', 'Layanan transportasi antar jemput', 'Tidak ada layanan antar-jemput di dalam cluster Puri Surya Jaya'),
(51, 'Pengelolaan', 'Rencana pembangunan tata ruang', 'Proyek pembangunan dan perencanaan tata ruang di sekitar Cluster Puri Surya Jaya belum ada dalam waktu dekat ini'),
(52, 'Program dan Kegiatan', 'Program penghijauan', 'Terdapat program penghijauan atau penanaman pohon komunitas di Cluster Puri Surya Jaya, terutama di jalan utama perumahan'),
(53, 'Program dan Kegiatan', 'Proyek seni komunitas', 'Tidak ada proyek seni komunitas yang diadakan di Cluster Puri Surya Jaya'),
(54, 'Program dan Kegiatan', 'Program pelatihan', 'Terdapat program pengembangan keterampilan dan pelatihan di Cluster Puri Surya Jaya. Namun program tersebut hanya terbatas untuk karyawan cluster saja, tidak terbuka untuk karyawan umum'),
(55, 'Program dan Kegiatan', 'Program daur ulang', 'Terdapat program pengumpulan barang bekas atau daur ulang di Cluster Puri Surya Jaya. Program tersebut diurus oleh masing-masing pengurus cluster.'),
(56, 'Keamanan dan Keselamatan', 'Instalasi keamanan pribadi', 'Instalasi keamanan pribadi di rumah/properti dapat dilakukan langsung tanpa memerlukan izin dari pihak pengelola cluster'),
(57, 'Pemasangan', 'Pemasangan panel surya', 'Pemasangan panel surya dapat langsung dilakukan sendiri oleh pemilik properti tanpa harus meminta izin pengelola cluster'),
(58, 'Pemasangan', 'Pemasangan lampu taman dan penerangan eksterior', 'Pemasangan lampu taman dan penerangan eksterior dapat dilakukan setelah melakukan diskusi dan mendapat izin oleh pengelola cluster'),
(59, 'Administrasi', 'Izin usaha di cluster', 'Tidak ada perizinan untuk usaha di dalam cluster. Area Cluster Puri Surya Jaya hanya diperuntukkan untuk tempat tinggal saja'),
(60, 'Administrasi', 'Prosedur tamu masuk', 'Tamu yang hendak masuk ke dalam cluster untuk kepentingan apapun harus melapor ke securiy dan meninggalkan kartu identitas kepada petugas security yang bertugas'),
(61, 'Aturan lain-lain', 'Tempat parkir tambahan', 'Tempat parkir tambahan untuk pengunjung Cluster Puri Surya Jaya disediakan di dekat area security pada masing-masing cluster'),
(62, 'Pemasangan', 'Pemasangan tanda atau spanduk', 'Pemasangan tanda atau spanduk di dalam cluster hanya diperbolehkan di tempat-tempat yang sudah ditentukan di jalanan umum, seperti detak masjid dan perempatan jalan baru. Pemasangan dapat dilakukan setelah mendapat izin dari pihak pengelola cluster'),
(63, 'Pemasangan', 'Pemasangan papan reklame', 'Pemasangan papan reklame dapat dilakukan setelah mendapat izin langsung dari pengelola. Silahkan hubungi pengelola untuk detail lebih lanjut'),
(64, 'Fasilitas Olahraga', 'Turnamen olahraga', 'Turnamen olahraga tidak dapat diadakan di Cluster Puri Surya Jaya karena tidak disediakan tempat yang memadai pada area cluster'),
(65, 'Aturan lain-lain', 'Penggunaan drone', 'Penggunaan drone pada Cluster Puri Surya Jaya hanya diperbolehkan di jalan utama saja, untuk di area cluster tidak diperbolehkan'),
(66, 'Fasilitas Olahraga', 'Penggunaan fasilitas kolam renang', 'Fasilitas kolam renang dapat digunakan untuk acara khusus seperti pernikahan, ulang tahun, dsb. Namun, untuk acara seperti pertandingan, perlombaan atau acara lain yang membuat kolam perlu dibersihkan secara menyeluruh tidak diperbolehkan'),
(67, 'Pengelolaan Lingkungan dan Kebersihan', 'Jadwal pengambilan sampah', 'Pengambilan sampah dilakukan sebanyak 3 kali dalam seminggu dengan jadwal sebagai berikut:\n1. Cluster Alexandria Fortune pada hari senin, kamis dan sabtu\n2. Cluster Valencia Icon pada senin, rabu dan jumat'),
(68, 'Pengelolaan Lingkungan dan Kebersihan', 'Jadwal pemotongan rumput', 'Jadwal pemotongan rumput di ruang lingkup Cluster Puri Surya Jaya dilakukan setiap 2 minggu sekali pada musim penghujan. Pada musim kemarau, pemotongan dilakukan sesuai dengan kondisi rumput pada lingkungan cluster'),
(69, 'Pengelolaan Lingkungan dan Kebersihan', 'Pemeliharaan taman', 'Pemeliharaan taman di area Cluster Puri Surya Jaya dilakukan secara rutin. Setiap hari dilakukan penyapuan area taman. Pemeliharaan taman seperti pemotongan rumput dan pemerhatian tanaman dilakukan setiap 2 minggu sekali'),
(70, 'Pengelolaan Lingkungan dan Kebersihan', 'Layanan kebersihan khusus area bermain anak-anak', 'Tidak ada layanan kebersihan khusus area bermain anak-anak, layanan dan kebijakan kebersihan mengikuti aturan cluster'),
(71, 'Pengelolaan Lingkungan dan Kebersihan', 'Jadwal pengelolaan saluran air', 'Pengelolaan kebersihan saluran air di dalam cluster dilakukan rutin setiap sebulan sekali'),
(72, 'Pengelolaan Lingkungan dan Kebersihan', 'Jadwal penyiraman tanaman', 'Penyiraman tanaman pada area Cluster Puri Surya Jaya dilakukan setiap hari pada pagi atau sore pada musim kemarau. Pada musim penghujan tidak ada penyiraman'),
(73, 'Pengelolaan Lingkungan dan Kebersihan', 'Jadwal penyemprotan pestisida', 'Tidak ada jadwal khusus untuk penyemprotan pestisida, penyemprotan akan dilakukan berdasarkan kondisi lingkungan sekitar cluster'),
(74, 'Aturan lain-lain', 'Aturan penanaman pohon', 'Penanaman pohon di sekitar rumah dapat dilakukan sendiri oleh masing-masing pemilik properti. Pohon yang ditanam tidak boleh pohon berakar tunjang karena dapat merusak saluran yang sudah terinstal di lingkungan cluster'),
(75, 'Administrasi', 'Persyaratan renovasi rumah', 'Perubahan/penambahan pada struktur/warna rumah di Cluster Puri Surya Jaya dapat dilakukan setelah berdiskusi dan diberikan izin oleh pihak pengelolaan\n\nRenovasi rumah dapat dilakukan dengan menyiapkan dokumen berikut:\n1. Berita acara serah terima\n2. Mengajukan desain perubahan\n3. Bayar jaminan renovasi sebesar 5 jt'),
(76, 'Administrasi', 'Pelaporan perubahan kepemilikan properti', 'Pelaporan perubahan informasi kepemilikan dan tanggung jawab properti dapat dilakukan dengan menghubungi pengelola cluster setelah proses pemindahan kepemilikan diselesaikan'),
(77, 'Pengelola Cluster', 'Nomor Rekening Pembayaran IPL', 'Pembayaran IPL dapat ditransfer ke no.rek BCA 0183306321 a.n JAYALAND PT dengan menyertakan keterangan blok & nomor rumah.'),
(78, 'Salam', 'Salam Penutup', 'Terima kasih atas pertanyaannya. Jangan ragu untuk menghubungi kami lagi jika ada hal lain yang perlu ditanyakan. Sampai jumpa!');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `response_sql`
--
ALTER TABLE `response_sql`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `response_sql`
--
ALTER TABLE `response_sql`
  MODIFY `Id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
