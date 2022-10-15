import './HeaderRow.scss'
import classes from './HeaderRow.module.scss'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'
import ChatIcon from '@mui/icons-material/Chat'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, NavLink } from 'react-router-dom'

type Props = {}

const HeaderRow = (props: Props) => {
    return (
        <>
            <div className="header-row">
                <div className="header-left">
                    <div className="header-icons-back">
                        <div className="header-icons only-mobile">
                            <MenuIcon />
                            <span className="icons-line-bottom"></span>
                        </div>
                        <div className="header-menu-mobile-block">
                            <div className="header-menu-item-mobile-text">
                                Menu
                            </div>
                            <div className="header-menu-item-mobile">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? classes.noActiveMobileMenuItem
                                            : classes.noActiveMobileMenuItem
                                    }
                                >
                                    <div className="header-mobile-menu-butoon">
                                        <span className="butoon-line-top"></span>
                                        Home
                                        <span className="butoon-line-bottom"></span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="header-menu-item-mobile">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? classes.activeMobileMenuItem
                                            : classes.noActiveMobileMenuItem
                                    }
                                >
                                    <div className="header-mobile-menu-butoon">
                                        <span className="butoon-line-top"></span>
                                        About
                                        <span className="butoon-line-bottom"></span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="header-menu-item-mobile">
                                <NavLink
                                    to="/delivery"
                                    className={({ isActive }) =>
                                        isActive
                                            ? classes.activeMobileMenuItem
                                            : classes.noActiveMobileMenuItem
                                    }
                                >
                                    <div className="header-mobile-menu-butoon">
                                        <span className="butoon-line-top"></span>
                                        Delivery
                                        <span className="butoon-line-bottom"></span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="header-menu-item-mobile">
                                <NavLink
                                    to="/clients"
                                    className={({ isActive }) =>
                                        isActive
                                            ? classes.activeMobileMenuItem
                                            : classes.noActiveMobileMenuItem
                                    }
                                >
                                    <div className="header-mobile-menu-butoon">
                                        <span className="butoon-line-top"></span>
                                        Clients
                                        <span className="butoon-line-bottom"></span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="header-menu-item-mobile">
                                <NavLink
                                    to="/reviews"
                                    className={({ isActive }) =>
                                        isActive
                                            ? classes.activeMobileMenuItem
                                            : classes.noActiveMobileMenuItem
                                    }
                                >
                                    <div className="header-mobile-menu-butoon">
                                        <span className="butoon-line-top"></span>
                                        Reviews
                                        <span className="butoon-line-bottom"></span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="header-menu-item-mobile">
                                <NavLink
                                    to="/contacts"
                                    className={({ isActive }) =>
                                        isActive
                                            ? classes.activeMobileMenuItem
                                            : classes.noActiveMobileMenuItem
                                    }
                                >
                                    <div className="header-mobile-menu-butoon">
                                        <span className="butoon-line-top"></span>
                                        Contacts
                                        <span className="butoon-line-bottom"></span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="header-menu-item-mobile">
                                <NavLink
                                    to="/fav"
                                    className={({ isActive }) =>
                                        isActive
                                            ? classes.activeMobileMenuItem
                                            : classes.noActiveMobileMenuItem
                                    }
                                >
                                    <div className="header-mobile-menu-butoon">
                                        <span className="butoon-line-top"></span>
                                        Fav
                                        <span className="butoon-line-bottom"></span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="header-icons-back">
                        <div className="header-icons only-desktop">
                            <LocationOnOutlinedIcon />
                            <span className="icons-line-bottom"></span>
                        </div>
                        <div className="header-contacts-desktop-block">
                            <div className="header-messenger-text">
                                Come to us
                            </div>
                            <div className="header-contact-desktop">
                                {/* <a href="">Office</a> */}
                                <Link
                                    className={classes.textDcorationNone}
                                    to={`../4`}
                                >
                                    Office
                                </Link>
                            </div>
                            <div className="header-contact-desktop">
                                {/* <a href="">Workshop</a> */}
                                <Link
                                    className={classes.textDcorationNone}
                                    to={`../5`}
                                >
                                    Workshop
                                </Link>
                            </div>
                            <div className="header-contact-desktop">
                                {/* <a href="">Warehouse</a> */}
                                <Link
                                    className={classes.textDcorationNone}
                                    to={`../6`}
                                >
                                    Warehouse
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-menu only-desktop">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? classes.noActiveDesktopMenuItem
                                : classes.noActiveDesktopMenuItem
                        }
                    >
                        <div className="header-desktop-menu-butoon">
                            <span className="butoon-line-top"></span>
                            Home
                            <span className="butoon-line-bottom"></span>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? classes.activeDesktopMenuItem
                                : classes.noActiveDesktopMenuItem
                        }
                    >
                        <div className="header-desktop-menu-butoon">
                            <span className="butoon-line-top"></span>
                            About
                            <span className="butoon-line-bottom"></span>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/delivery"
                        className={({ isActive }) =>
                            isActive
                                ? classes.activeDesktopMenuItem
                                : classes.noActiveDesktopMenuItem
                        }
                    >
                        <div className="header-desktop-menu-butoon">
                            <span className="butoon-line-top"></span>
                            Delivery
                            <span className="butoon-line-bottom"></span>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/clients"
                        className={({ isActive }) =>
                            isActive
                                ? classes.activeDesktopMenuItem
                                : classes.noActiveDesktopMenuItem
                        }
                    >
                        <div className="header-desktop-menu-butoon">
                            <span className="butoon-line-top"></span>
                            Clients
                            <span className="butoon-line-bottom"></span>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/reviews"
                        className={({ isActive }) =>
                            isActive
                                ? classes.activeDesktopMenuItem
                                : classes.noActiveDesktopMenuItem
                        }
                    >
                        <div className="header-desktop-menu-butoon">
                            <span className="butoon-line-top"></span>
                            Reviews
                            <span className="butoon-line-bottom"></span>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/contacts"
                        className={({ isActive }) =>
                            isActive
                                ? classes.activeDesktopMenuItem
                                : classes.noActiveDesktopMenuItem
                        }
                    >
                        <div className="header-desktop-menu-butoon">
                            <span className="butoon-line-top"></span>
                            Contacts
                            <span className="butoon-line-bottom"></span>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/fav"
                        className={({ isActive }) =>
                            isActive
                                ? classes.activeDesktopMenuItem
                                : classes.noActiveDesktopMenuItem
                        }
                    >
                        <div className="header-desktop-menu-butoon">
                            <span className="butoon-line-top"></span>
                            Fav
                            <span className="butoon-line-bottom"></span>
                        </div>
                    </NavLink>
                </div>

                <div className="header-right">
                    <div className="header-icons-back">
                        <div className="header-icons only-mobile">
                            <LocationOnOutlinedIcon />
                            <span className="icons-line-bottom"></span>
                        </div>
                        <div className="header-contacts-mobile-block">
                            <div className="header-messenger-text">
                                Come to us
                            </div>
                            <div className="header-contact-mobile">
                                {/* <a href="">Office</a> */}
                                <Link
                                    className={classes.textDcorationNone}
                                    to={`../4`}
                                >
                                    Office
                                </Link>
                            </div>
                            <div className="header-contact-mobile">
                                {/* <a href="">Workshop</a> */}
                                <Link
                                    className={classes.textDcorationNone}
                                    to={`../5`}
                                >
                                    Workshop
                                </Link>
                            </div>
                            <div className="header-contact-mobile">
                                {/* <a href="">Warehouse</a> */}
                                <Link
                                    className={classes.textDcorationNone}
                                    to={`../6`}
                                >
                                    Warehouse
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="header-icons-back">
                        <div className="header-icons">
                            <ChatIcon />
                            <span className="icons-line-bottom"></span>
                        </div>
                        <div className="header-messengers-block">
                            <div className="header-messenger-text">
                                Write us
                            </div>
                            <div className="header-messenger">
                                <a href="viber://chat?number=%2B380007777777">
                                    Viber
                                </a>
                            </div>
                            <div className="header-messenger">
                                <a href="t.me/+380007777777">Telegram</a>
                            </div>
                            <div className="header-messenger">
                                <a href="https://web.whatsapp.com/send/?phone=380677597178">
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="header-icons-back">
                        <div className="header-icons">
                            <PhoneEnabledIcon />
                            <span className="icons-line-bottom"></span>
                        </div>
                        <div className="header-telnumbers-block">
                            <div className="header-telnumber-text">Call us</div>
                            <div className="header-telnumber">
                                <a href="tel:+380005555555">000-555-55-55</a>
                            </div>
                            <div className="header-telnumber">
                                <a href="tel:+380006666666">000-666-66-66</a>
                            </div>
                            <div className="header-telnumber">
                                <a href="tel:+380007777777">000-777-77-77</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderRow
