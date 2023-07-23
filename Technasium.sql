--
-- Database: `samplevideo_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE IF NOT EXISTS `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemname` varchar(255) DEFAULT NULL,
  `description` TEXT(1000) DEFAULT NULL,
  `imagelink` varchar(50) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `keywords` varchar(1000) DEFAULT NULL
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10001 ;

--
-- Dumping data for table `user_details`
--

INSERT INTO `items` (`id`, `itemname`, `description`, `imagelink`, `category_id`) VALUES
(1, 'breadboard', `TODO`, 'https://nl.farnell.com/productimages/standard/en_GB/2395961-40.jpg', 0, 'arduino'),
(2, 'arduino', 'TODO', 'https://ce8dc832c.cloudimg.io/v7/_cdn_/CA/56/60/00/0/419244_1.jpg?width=640&height=480&wat=1&wat_url=_tme-wrk_%2Ftme_new.png&wat_scale=100p&ci_sign=24d4ccb4cea9fae38374e652ced53fe25cc43baa', 0, '')
;
