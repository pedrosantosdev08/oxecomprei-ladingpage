    interface ButtonPrimaryProps {
        title: string;
    }

export function ButtonPrimary({title}: ButtonPrimaryProps) {
    return (
        <button className="bg-linear-to-r from-orange-highlight to-orange text-white font-bold px-5 py-3 rounded-2xl">
            {title}
        </button>
    )
}