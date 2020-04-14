const topTemplate = document.createElement('template');

topTemplate.innerHTML = `
	<style>
		* {
			padding: 0px;
			margin: 0px;
		}
		div.top {
			width: 100%;
			height: 20%;
			min-height: 60px;
			max-height: 80px;
			position: fixed;
			display: flex;/*!*/
			flex-flow: row nowrap;
			justify-content: flex-start;
			align-items: center;
			border-bottom: 2px solid #ccc;
		}
		div.top .topImgBox {
			width: 20%;
			height: 100%;
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;

		}
		div.top .topInputBox {
			width: 80%;
			height: 100%;
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
		}
		div.top .topImgBox .topImg {
			height: 100%;
		}
		div.top .topInputBox .topInput {
			/*width: 20%;*/
			height: 30px;
			line-height: 30px;
			border-radius: 15px;
			padding: 0 15px 0 30px;
			margin-left: -25%;
			border: 1px solid #e3e3e3;
			outline: none;//去掉默认轮廓
			border: 1px solid black;
			background: #fff url('../img/search.png') 8px 5px no-repeat;
			background-size: 20px;
			/*vertical-align: middle !important;*/
		}
		div.top .topInputBox .topInput:hover {
			border: 1px solid #abe01a;
		}
	</style>
	<div class="top">
		<a class="topImgBox" href="#">
			<img class='topImg' src='../img/logo.jpg'></img>
		</a>
		<div class="topInputBox">
			<input type="text" class="topInput">
		</div>
	</div>
`;

class TopBar extends HTMLElement {
	constructor () {
		super();

		this._shadowRoot = this.attachShadow({ mode : 'open' });
		this._shadowRoot.appendChild(topTemplate.content.cloneNode(true));

		//do something ...
		this.$input = this._shadowRoot.querySelector('.topInput');
		this.$input.addEventListener('keydown', function onEnter(ev) {
			let event = ev || event;
			if(event.keyCode === 13) {
				//发起搜索
				// axios('')
			}
		})

	}
}

window.customElements.define('top-bar', TopBar)