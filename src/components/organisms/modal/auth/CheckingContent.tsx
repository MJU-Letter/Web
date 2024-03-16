interface CheckingContentProps {
  name: string;
  major: string;
  studentId: string;
}

const CheckingContent = ({ name, major, studentId }: CheckingContentProps) => {
  return (
    <div className='flex flex-col items-center justify-center text-center w-280 mt-40 mb-32'>
      <h1 className='medium-medium text-gray-dark-text-1 mb-24'>올바른 정보가 맞는지 확인해 주세요.</h1>
      <h1 className='medium-regular text-gray-dark-text-1'>이름: {name}</h1>
      <h1 className='medium-regular text-gray-dark-text-1 mb-24'>
        학과/학번: {major} {studentId}
      </h1>
      <h2 className='small-regular text-gray-medium-text-2 '>* 정보가 다르다면 관리자에게 문의해 주세요.</h2>
      <h2 className='small-regular text-gray-medium-text-2 '>mjuletter@gmail.com</h2>
    </div>
  );
};

export default CheckingContent;
