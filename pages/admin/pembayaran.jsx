import Image from "next/image";
import TestPhoto from "@/public/pict.png"
import Button from "@/components/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import getBaseUrl from "@/utils/getBaseUrl";
import axios from "axios";

const KonfirmasiPembayaran = () => {
    const statuses = [
        "PENDING", // Untuk yang belum bayar
        "ACCEPT", // Untuk selesai pembayaran tapi belum mengerjakan
        "DONE", // Untuk yang sudah mengerjakan
        "REJECT" // Untuk yang gagal pembayaran
    ]

    const [data, setData] = useState([])
    const baseUrl = getBaseUrl()

    const updateTransaksi = (index, status) => {
        axios({
            method: "POST",
            url: `${baseUrl}/control/change-payment-status`,
            data: {
                "status": status,
                "transaksi": data[index]
            },
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.error(err)
        })
    }

    useEffect(() => {
        axios({
            method: "GET",
            url: `${baseUrl}/api/transaksi`
        }).then(res => {
            setData(res.data)
        }).catch(err => {
            console.error(err)
        })
    }, [])

    return (
        <>
            <section>
                <h1 className="mb-3 text-white">Konfirmasi Pembayaran</h1>
                <section className="p-5 bg-white">
                    <table className="table-auto w-full text-center border-2 border-primary rounded-md">
                        <thead>
                            <tr className="">
                                <th className="border-b-2 border-primary">#</th>
                                <th className="border-b-2 border-primary">Nama Paket</th>
                                <th className="border-b-2 border-primary">Jenis Pembayaran</th>
                                <th className="border-b-2 border-primary">Nominal</th>
                                <th className="border-b-2 border-primary">Bukti Pembayaran</th>
                                <th className="border-b-2 border-primary">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                testData.map(data => <tr key={data.id} className="odd:bg-blue-light">
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
                            } */}
                            {
                                data.map((d, index) => <tr key={d._id} className="odd:bg-blue-light">
                                    <td className="font-bold">{index+1}</td>
                                    <td>{d.nama_tryout}</td>
                                    <td>{d.method}</td>
                                    <td>Rp{d.harga}</td>
                                    <td className="flex items-center justify-center py-3">
                                        <img
                                            src={d.bukti_bayar}
                                            alt={d.bukti_bayar}
                                            className="w-40"
                                        />
                                    </td>
                                    <td>
                                        <select name="status" className="rounded-md p-2 bg-blue focus:outline-blue-dark" onChange={(e) => { updateTransaksi(index, e.target.value) }}>
                                            {
                                                statuses.map((stat, i) => <option key={i} value={stat} selected={(d.status == stat)} >
                                                    {stat}
                                                </option>)
                                            }
                                        </select>
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