

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-400 mb-2">---{subHeading}---</p>
            <h1 className="text-3xl uppercase border-y-4 py-2">{heading}</h1>
        </div>
    );
};

export default SectionTitle;