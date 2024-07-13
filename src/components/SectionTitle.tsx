type TSectionTitleProps= {
    title: string,
    subtitle?: string,
    className?: string,
}


const SectionTitle = ({title, subtitle, className}: TSectionTitleProps) => {
    return (
        <div className={className}>
            <h2 className="text-3xl font-bold text-center capitalize">{title}</h2>
            {subtitle && <p className="text-center mt-3 text-md mb-8">{subtitle}</p>}
        </div>
    );
};

export default SectionTitle;