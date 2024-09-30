-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2024 at 08:53 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `personal_site`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `descriptions_about` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`descriptions_about`) VALUES
('<h2>yasin</h2>');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `comment` varchar(120) NOT NULL,
  `replay_comment` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `post_id`, `comment`, `replay_comment`) VALUES
(1, 23, 'yasin', NULL),
(2, 23, 'salmm', NULL),
(3, 23, ';kjkhkh', NULL),
(4, 23, 'tasinibn', 'sabetyy'),
(6, 23, 'سلام خوبی', 'tasinibn'),
(8, 23, 'ssjhlkjhk', NULL),
(9, 23, 'ali', NULL),
(10, 23, 'به به', NULL),
(11, 23, 'به به بع به به ', 'به به'),
(12, 23, 'yasin', 'به به بع به به '),
(13, 26, 'کامنت اول', NULL),
(14, 26, 'کامنت دوم', 'کامنت اول'),
(15, 25, '1', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `likes` int(11) NOT NULL DEFAULT 0,
  `date_create` date NOT NULL,
  `type` enum('image','video') NOT NULL,
  `mode` enum('horizontal','vertical') NOT NULL,
  `file` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `title`, `description`, `likes`, `date_create`, `type`, `mode`, `file`) VALUES
(23, 'سلام من  یاسین هستم', 'به به چه حال خوبی چه فضای خوبی به عجب حالی', 0, '2024-09-28', 'image', 'vertical', '2024-9-28-1221605924download (2).jpg'),
(25, 'hkjh klhgg jkggkjgkgjk kjhg', 'kgkgkj kjgkgkgk jk gg kjk gkhgk kjg kjg kjk gk kg ', 0, '2024-09-28', 'image', 'horizontal', '2024-9-28-1528274666yasinsaber.jpg'),
(26, 'yasin222', 'kljhth kjhg uhjgjh o ouo o', 0, '2024-09-29', 'image', 'horizontal', '2024-9-29-458809056download (1)_11zon.png');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `favicon` varchar(255) NOT NULL,
  `logo` varchar(120) NOT NULL,
  `image_id` varchar(255) DEFAULT NULL,
  `video_id` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(300) NOT NULL,
  `footer` varchar(350) NOT NULL,
  `title_web` varchar(120) NOT NULL,
  `description_web` varchar(350) NOT NULL,
  `keywords` varchar(500) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`favicon`, `logo`, `image_id`, `video_id`, `title`, `description`, `footer`, `title_web`, `description_web`, `keywords`, `image`) VALUES
('2024-9-27-1239799100yasinsaber.jpg', 'YASIN', '2,1,1', '1,2,3', 'من پیام هستم', '<p>yasin</p>', '<p>hdfghdfhgdhgdfhgdf</p>', 'پیام', 'سلام من پیام هستم', 'پیام,سایت پیام', '2024-9-27-234406280download (1)_11zon.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `gmail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` enum('user','admin') NOT NULL,
  `date_lagin` date NOT NULL,
  `validition_code` mediumint(6) NOT NULL,
  `validition` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `gmail`, `password`, `user_type`, `date_lagin`, `validition_code`, `validition`) VALUES
(54, 'yasin', 'yasin123@gmail.com', '$2y$10$91DH6e0SRL6oIw1.k3U77eNCd.YHg5yGkdTjyT9EIAQ1eTfgrCDpa', 'admin', '2024-09-23', 753418, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `comment_post` (`post_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `gmail` (`gmail`),
  ADD KEY `validition` (`validition`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comment_post` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
