import '@styles/globals.css'

export const metadata = {
	title: "Record Management",
	description: "manage your record easily"
}

const RootLayout = ({ children }) => {
	return (
		<html lang="en" className="dark">
			<body>
				<div className="main bg-slate-900">
					<div >
						{children}
					</div>
				</div>
			</body>
		</html>
	)
}

export default RootLayout
