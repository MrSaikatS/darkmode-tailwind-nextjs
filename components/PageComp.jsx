const PageComp = ({ title }) => {
	return (
		<>
			<div className='container mx-auto'>
				<div className='grid place-items-center h-[95vh]'>
					<div className='text-5xl font-semibold p-4 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-fuchsia-400 dark:to-pink-600'>
						{title}
					</div>
				</div>
			</div>
		</>
	);
};

export default PageComp;
