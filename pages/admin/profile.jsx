import Image from "next/image";
import ProfilePic from "@/public/profile.jpg"
import Button from "@/components/Button";
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {
    return (
        <>
            <section>
                <h1>Profile Saya</h1>
                <section className="flex flex-col gap-2 bg-white p-5">
                    <section className="flex justify-center items-center">
                        <div className="relative">
                            <Image 
                                src={ProfilePic}
                                className="rounded-full w-36 h-36"
                            />
                            <Button className={"rounded-full absolute px-1 py-1 top-5 right-0"}>
                                <EditIcon />
                            </Button>
                        </div>
                    </section>
                    <section className="grid grid-cols-2">
                        <section>
                            <h2>Data Pribadi</h2>
                            <section className="flex flex-col gap-2">
                                <section>
                                    <h3>Username</h3>
                                    <span>admin</span>
                                </section>
                                <section>
                                    <h3>Nama Lengkap</h3>
                                    <span>Admin</span>
                                </section>
                                <section>
                                    <h3>Email</h3>
                                    <span>admin@gmail.com</span>
                                </section>
                                <section>
                                    <h3>Nomor Handphone</h3>
                                    <span>081283457218</span>
                                </section>
                            </section>
                        </section>
                        <section>
                            <h2>Data Pekerjaan</h2>
                            <section className="flex flex-col gap-2">
                                <section>
                                    <h3>Pekerjaan</h3>
                                    <span>Guru</span>
                                </section>
                                <section>
                                    <h3>Kota</h3>
                                    <span>Jakarta</span>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </>
    );
}
 
export default Profile;