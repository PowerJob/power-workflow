/*
 * @version: 
 * @Author: dee
 * @Date: 2021-02-03 14:52:33
 * @LastEditors: dee
 * @LastEditTime: 2021-02-03 14:53:39
 */
export default {
  default: {
    cursor: 'move'
  },
  base: {
    origin: {
      fill: '#C7E4FF',
			stroke: '#61B3FF',
			opacity: 0.6,
			lineWidth: 2,
			radius: 8,
			cursor: 'move'
    }
  },
  leftText: {
		origin: {
			fill: '#014445',
			fontSize: 12,
			// stroke: '#D45547',
			x: 12,
			y: 12,
			textBaseline: 'middle'
		}
  },
  titleText: {
		origin: {
			// fill: '#014445',
			fontSize: 14,
			stroke: '#2E4553',
			textBaseline: 'middle',
			textAlign: "center",
			cursor: 'move'
		}
  },
  statusShape: {
		r: 3,
		text: {
			textBaseline: 'middle',
			textAlign: "center",
			fontSize: 12,
		},
		// 原始
		origin: {
			fill: '#00BB2F',
			// stroke: '#00BB2F',
		},
		// 成功
		success: {
			fill: '#00BB2F',
			// stroke: '#00BB2F',
		},
		// 等待
		waiting: {
			fill: '#FE9201',
			// stroke: '#00BB2F',
		},
		// 进行中
		underway: {
			fill: '#1990FF',
			// stroke: '#1990FF',
		},
		faild: {
			fill: '#CA0101'
		},
		stop: {
			fill: '#72007B'
		}
	},
	// 左下角的文字
	rightText: {
		origin: {
			fill: '#014445',
			fontSize: 12,
			textBaseline: 'middle',
			textAlign: "right",
		}
	}
}