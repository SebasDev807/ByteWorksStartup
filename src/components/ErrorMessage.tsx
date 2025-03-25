export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    return (
        <p className="error-message">
            {children}
        </p>
    )
}
