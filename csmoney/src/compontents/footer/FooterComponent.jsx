
function FooterComponent() {
    const themeColor = localStorage.getItem("theme");
    return <footer className={themeColor === "primary" ? "bg-primary mt-40 p-10" : ""}>
        <div className="flex flex-row gap-72 w-10/12 m-auto">
            <div>
                <h2 className={themeColor === "primary" ? "text-white font-bold text-2xl": ""}>CSMONEY</h2>
                <br />
                <p className={themeColor === "primary" ? "text-primary_text font-bold text-md": ""}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, numquam! Voluptatum eum fuga est nemo pariatur totam, amet fugit magni laboriosam minima aperiam distinctio, sint, praesentium id. Vel, fuga nostrum?</p>
            </div>
            <div>
                <h2 className={themeColor === "primary" ? "text-white font-bold text-xl": ""}>LINKS</h2>
                <br />
                <nav className="list-none flex flex-col gap-2">
                    <li>
                        <a href="" className={themeColor === "primary" ? "text-primary_text font-bold text-md": ""}>Inventory</a>
                    </li>
                    <li>
                        <a href="" className={themeColor === "primary" ? "text-primary_text font-bold text-md": ""}>Profile</a>
                    </li>
                    <li>
                        <a href="" className={themeColor === "primary" ? "text-primary_text font-bold text-md": ""}>Item</a>
                    </li>
                </nav>
            </div>
            <div>
                <h2 className={themeColor === "primary" ? "text-white font-bold text-xl": ""}>LEGAL</h2>
                <br />
                <nav className="list-none flex flex-col gap-2">
                    <li>
                        <a href="">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="">Terms of Service</a>
                    </li>
                    <li>
                        <a href="">Cookies Policy</a>
                    </li>
                </nav>
            </div>
        </div>
        <div className="w-10/12 m-auto">
            <br />
            <hr />
            <br />
            <p className={themeColor === "primary" ? "text-primary_text font-bold text-xl": ""}>
                © 2024 steamwebapi.com. All rights reserved. Not affiliated with Valve, Steam, or other services.
                This site offers developer-focused free and paid Steam APIs.
                Not affiliated with Valve or the official Steam Web API or Steamapis.
            </p>
        </div>
    </footer>
}

export default FooterComponent;