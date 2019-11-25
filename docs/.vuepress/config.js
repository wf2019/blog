const sidebarRe = require('./sidebar');

module.exports = {
	base: '/',
	title: '演示站',
	description: 'Just playing around',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{ text: '最新资源网', link: 'https://www.zxzyw.net' },
			{
				text: '演示网站',
				items: [
					{text: 'cms', link: 'http://cms.zxzyw.net'}
				]
			}
		],
		sidebar: sidebarRe.sidebar
	}
}