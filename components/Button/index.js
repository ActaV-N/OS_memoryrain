const Button = ({ link, target, children, ...props }) => {
    if (link) {
        return (
            <a href={link} target={target}>
                <button className="button" {...props}>
                    {children}
                </button>
            </a>
        );
    }

    return (
        <button className="button" {...props}>
            {children}
        </button>
    );
};

export default Button;
