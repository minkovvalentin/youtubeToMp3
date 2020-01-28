import EnterLink from '../components/EnterLink';

function HomePage() {
	return (
		<div className="main-container">
			<style jsx>
				{`
				.main-container{
					border:solid 100px black;
					min-height: 100vh;
					box-sizing: border-box;
					position:relative
				}
				.enter-link-container{
					height: 100%;
					position: absolute;
					width:100%;
					display: flex;
					justify-content:center;
					align-items: center;

				}
				.center-content{
				}
			`}
			</style>
			<div className="center-content">
				<div className="enter-link-container">
					<EnterLink />
				</div>
			</div>

		</div>
	);
}

export default HomePage