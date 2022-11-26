import Head from "next/head";

const PageComp = ({ title }) => {
	return (
		<>
			<Head>
				<title>{title} | Darkmode Demo</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<div className='container mx-auto'>
				<div className='grid place-items-center h-[95vh]'>
					<div className='text-5xl font-bold p-4 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-fuchsia-400 dark:to-pink-600'>
						{title}
					</div>
				</div>
			</div>
		</>
	);
};

export default PageComp;
