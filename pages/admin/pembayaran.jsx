import SearchBar from "@/components/Admin/SearchBar";
import { useState } from "react";
import Image from "next/image";
import TestPhoto from "@/public/pict.png"
import Button from "@/components/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const KonfirmasiPembayaran = () => {
    const [searchText, setSearchText] = useState("")

    const testData = [
        { id: 1, username: "testing", namaPaket: "Tryout #3", jenisPembayaran: "Gopay", nominal: 15000 },
        { id: 2, username: "testing", namaPaket: "Tryout #3", jenisPembayaran: "Gopay", nominal: 15000 },
        { id: 3, username: "testing", namaPaket: "Tryout #3", jenisPembayaran: "Gopay", nominal: 15000 },
        { id: 4, username: "testing", namaPaket: "Tryout #3", jenisPembayaran: "Gopay", nominal: 15000 },
        { id: 5, username: "testing", namaPaket: "Tryout #3", jenisPembayaran: "Gopay", nominal: 15000 },
        { id: 6, username: "testing", namaPaket: "Tryout #3", jenisPembayaran: "Gopay", nominal: 15000 },
        { id: 7, username: "testing", namaPaket: "Tryout #3", jenisPembayaran: "Gopay", nominal: 15000 },

    ]

    return (
        <>
            <SearchBar setText={setSearchText} />
            <section>
                <h1 className="mb-3">Konfirmasi Pembayaran</h1>
                <section className="p-5 bg-white">
                    <table className="table-auto w-full text-center border-2 border-primary rounded-md">
                        <thead>
                            <tr className="">
                                <th className="border-b-2 border-primary">#</th>
                                <th className="border-b-2 border-primary">Username</th>
                                <th className="border-b-2 border-primary">Nama Paket</th>
                                <th className="border-b-2 border-primary">Jenis Pembayaran</th>
                                <th className="border-b-2 border-primary">Nominal</th>
                                <th className="border-b-2 border-primary">Bukti Pembayaran</th>
                                <th className="border-b-2 border-primary">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                testData.map(data => <tr className="odd:bg-blue-light">
                                    <td className="font-bold">{data.id}</td>
                                    <td>{data.username}</td>
                                    <td>{data.namaPaket}</td>
                                    <td>{data.jenisPembayaran}</td>
                                    <td>Rp{data.nominal}</td>
                                    <td className="flex items-center justify-center py-3">
                                        <Image 
                                            src={TestPhoto}
                                            alt={data.username}
                                            className="w-40"
                                        />
                                    </td>
                                    <td>
                                        <div className="flex items-center justify-center gap-2">
                                            <Button className="bg-yellow-400">
                                                <EditIcon />
                                            </Button>
                                            <Button className="bg-red">
                                                <DeleteIcon />
                                            </Button>
                                        </div>
                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </section>
            </section>
        </>
    );
}
 
export default KonfirmasiPembayaran;