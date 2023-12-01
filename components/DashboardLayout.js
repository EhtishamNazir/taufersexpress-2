import Header from "./DashboardHeader"

function DashboardLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default DashboardLayout