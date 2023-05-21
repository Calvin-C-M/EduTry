import Button from "@/components/Button"
import EditIcon from '@mui/icons-material/Edit';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
export default function Profile(){
    return(
        <div className='w-full px-10 md:px-28 pt-8 md:pt-20 bg-primary min-h-[100vh]'>
            <Button className="bg-red mt-5 mx-[1050px]">Logout</Button>
            <h2 className="text-center text-white my-9">Profile Saya</h2>
            <div className="w-full bg-white py-8 px-20">
                <div className="w-full flex justify-center ">
                    <div className="relative">
                    <img className="aspect-square w-[200px] rounded-full my-auto" src="/profile.jpg" alt="" />
                    <button className="p-1 bg-primary h-fit rounded-full absolute right-0 top-8">
                    <EditIcon className="text-white"/>
                    </button>
                    </div>
                </div>
                <div className="w-full flex justify-between mt-10">
                <div className="w-2/5">
                    <h3 className="text-2xl">Data Pribadi</h3>
                    <div className="w-full mt-4">
                        <label htmlFor="">Username</label>
                        <input className="w-full bg-white border-2 border-primary rounded-md p-3 font-bold mt-3" value="" type="text" />
                    </div>
                    <div className="w-full mt-4">
                        <label htmlFor="">Nama Lengkap</label>
                        <input className="w-full bg-white border-2 border-primary rounded-md p-3 font-bold mt-3" value="" type="text" />
                    </div>
                    <div className="w-full mt-4">
                        <label htmlFor="">Email</label>
                        <input className="w-full bg-white border-2 border-primary rounded-md p-3 font-bold mt-3" value="" type="text" />
                    </div>
                    <div className="w-full mt-4">
                        <label htmlFor="">Nomor Handphone</label>
                        <input className="w-full bg-white border-2 border-primary rounded-md p-3 font-bold mt-3" value="" type="text" />
                    </div>
                </div>
                <div className="w-2/5">
                    <h3 className="text-2xl">Data Sekolah</h3>
                    <div className="w-full mt-4">
                        <label htmlFor="">Nama Sekolah</label>
                        <input className="w-full bg-white border-2 border-primary rounded-md p-3 font-bold mt-3" value="" type="text" />
                    </div>
                    <div className="w-full mt-4">
                        <label htmlFor="">Tahun Lulus SMA</label>
                        <input className="w-full bg-white border-2 border-primary rounded-md p-3 font-bold mt-3" value="" type="text" />
                    </div>
                    <div className="w-full mt-4">
                        <label htmlFor="">Provinsi</label>
                        <input className="w-full bg-white border-2 border-primary rounded-md p-3 font-bold mt-3" value="" type="text" />
                    </div>
                    <div className="w-full mt-4">
                        <label htmlFor="">Kota</label>
                        <input className="w-full bg-white border-2 border-primary rounded-md p-3 font-bold mt-3" value="" type="text" />
                    </div>
                </div>
                </div>
                <div className="flex flex-row-reverse mt-10">
                <Button className="ml-9">Simpan</Button>
                <Button>Cancel</Button>
                </div>
            </div>
            <h2 className="text-center text-white my-9">Pilihan Program Studi</h2>
            <div className="w-full py-6 px-7 bg-white">
            <div className="w-full flex">
            <div className="w-1/2 border-r border-black">
            <p className="text-center font-medium">Pilihan Pertama</p>
            <div className="w-[180px] aspect-square mx-auto mt-16">
                <img className="" src="/unpad.png" alt="" />
            </div>
            <select className="bg-white mx-auto border-2 block p-3 border-primary rounded-md w-1/2 font-medium" name="" id="">
                <option value="">Universitas Padjajaran</option>
            </select>
            <select className="bg-white mx-auto border-2 block p-3 border-primary rounded-md w-1/2 font-medium mt-6" name="" id="">
                <option value="">Teknik Informatika</option>
            </select>
            <div className="flex w-full mt-14 justify-evenly">
            <div className="w-1/4 ">
                <div className="w-full bg-primary flex justify-center py-4 rounded-md text-white">
                <HomeWorkIcon></HomeWorkIcon>
                <p className="ml-3">40</p>
                </div>
                <p className="text-center">Daya Tampung</p>
            </div>
            <div className="w-1/4 ">
                <div className="w-full bg-primary flex justify-center py-4 rounded-md text-white">
                <LocalFireDepartmentIcon></LocalFireDepartmentIcon>
                <p className="ml-3">2430</p>
                </div>
                <p className="text-center">Peminat</p>
            </div>
            <div className="w-1/4 ">
                <div className="w-full bg-primary flex justify-center py-4 rounded-md text-white">
                <GroupsIcon></GroupsIcon>
                <p className="ml-3">1.65 %</p>
                </div>
                <p className="text-center">Keketatan</p>
            </div>
            </div>
            </div>
            <div className="w-1/2 border-l border-black">
            <p className="text-center font-medium">Pilihan Kedua</p>
            <div className="w-[180px] aspect-square mx-auto mt-16">
                <img className="" src="/unpad.png" alt="" />
            </div>
            <select className="bg-white mx-auto border-2 block p-3 border-primary rounded-md w-1/2 font-medium" name="" id="">
                <option value="">Universitas Padjajaran</option>
            </select>
            <select className="bg-white mx-auto border-2 block p-3 border-primary rounded-md w-1/2 font-medium mt-6" name="" id="">
                <option value="">TV & Perfilman</option>
            </select>
            <div className="flex w-full mt-14 justify-evenly">
            <div className="w-1/4 ">
                <div className="w-full bg-primary flex justify-center py-4 rounded-md text-white">
                <HomeWorkIcon></HomeWorkIcon>
                <p className="ml-3">40</p>
                </div>
                <p className="text-center">Daya Tampung</p>
            </div>
            <div className="w-1/4 ">
                <div className="w-full bg-primary flex justify-center py-4 rounded-md text-white">
                <LocalFireDepartmentIcon></LocalFireDepartmentIcon>
                <p className="ml-3">2430</p>
                </div>
                <p className="text-center">Peminat</p>
            </div>
            <div className="w-1/4 ">
                <div className="w-full bg-primary flex justify-center py-4 rounded-md text-white">
                <GroupsIcon></GroupsIcon>
                <p className="ml-3">1.65 %</p>
                </div>
                <p className="text-center">Keketatan</p>
            </div>
            </div>
            </div>
            </div>
            <div className="flex flex-row-reverse mt-12">
            <Button className="ml-9">Simpan</Button>
            <Button>Cancel</Button>
            </div>
            </div>
        </div>
    )
}
