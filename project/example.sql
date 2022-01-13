--
-- Table structure for table `writer`
--
 
 
CREATE TABLE `writer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `isPublic` boolean NOT NULL,
  PRIMARY KEY (`id`)
);
 
--
-- Dumping data for table `writer`
--
 
INSERT INTO `writer` VALUES (1,'kang', true);
INSERT INTO `writer` VALUES (2,'yun', false);
INSERT INTO `writer` VALUES (3,'ji', true);
 
--
-- Table structure for table `topic`
--
 
CREATE TABLE `topic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `board` varchar(7) NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `writer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `topic`
--

-- id / board / title / description / created / writer_id

INSERT INTO `topic` VALUES (1,'자유 게시판','자고싶다', '1231424145235422414', '2022-01-01 12:10:11',1);
INSERT INTO `topic` VALUES (2,'비밀 게시판','과제 밀렸는데', '가나다라마바사아자차카타파하', '2022-01-03 13:01:10',1);
INSERT INTO `topic` VALUES (3,'SW 게시판','노동요','abcdefghi', '2022-01-20 11:01:10',2);
INSERT INTO `topic` VALUES (4,'정보 게시판','아주 비기너 참여하시는','ABCDEFGHIJK', '2022-01-23 01:03:03',3);
INSERT INTO `topic` VALUES (5,'홍보 게시판','아주 비기너 참여하시는','아주 비기너 참여하시는 여러분 모두들 화이팅!', '2022-01-30 12:31:03',1);