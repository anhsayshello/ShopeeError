export default function Login() {
  return (
    <div className='bg-orange'>
      <div
        className='flex items-center justify-end min-h-[600px] mx-auto w-[1040px]
       bg-[url(https://down-vn.img.susercontent.com/file/sg-11134004-7rccz-m6hsc8ddtji3dc)] bg-auto bg-no-repeat bg-center'
      >
        <div className='flex w-full justify-between'>
          <div className='flex flex-col'></div>
          <div>
            <div className=' w-[400px] bg-white rounded-sm'>
              <div className='px-8 py-6 text-xl'>Đăng nhập</div>
              <div className='px-8 pb-8'>
                <form className=''>
                  <div className='mb-3'>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      className='text-sm px-3 py-2.5 w-full border border-solid outline-none border-gray-300 focus:border-gray-500 focus:shadow-sm'
                    />
                    <div className='min-h-[10px] text-red-500 text-sm invisible'>Email không hợp lệ</div>
                  </div>
                  <div className='mb-3'>
                    <input
                      type='password'
                      name='password'
                      placeholder='Password'
                      className='text-sm px-3 py-2.5 w-full border border-solid outline-none border-gray-300 focus:border-gray-500 focus:shadow-sm'
                    />
                    <div className='min-h-[10px] text-red-500 text-sm invisible'>Email không hợp lệ</div>
                  </div>
                  <button className='text-sm text-white uppercase bg-orange hover:opacity-90 px-5 py-3 w-full rounded-xs cursor-pointer'>
                    Đăng nhập
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
