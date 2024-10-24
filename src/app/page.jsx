import Header from "../components/layout/Header";
import RotateFadeText from "../components/ui/RotateFadeText";
import MovingText from "@/components/ui/MovingText";

export default function Home() {
  return (
    <>
      <div className="h-screen p-5 bg-cover bg-gray-100 bg-center overflow-hidden overflow-y-auto">
        <div className="overflow-hidden h-[calc(100%-6px)] overflow-y-auto border-2 border-black">
          <Header title={"souta"} />
          <div className="h-auto text-black bg-cover bg-center bg-gray-100">
            <div className="w-full h-[calc(100vh-140px)] bg-gray-100 border-t-0 border-b-2 border-black flex ">
              <div className="w-3/12  p-5 font-hannari border-r-2 border-black">
                <p className="">
                  Name: Souta YAMASAKI
                  <br />
                  Date of Birth: June 12, 2003
                  <br />
                  Place of Birth: Saitama, Japan
                  <br />
                  Hobbies: Basketball, Technology
                </p>
              </div>
              <div className="w-3/12 content-center">
                <RotateFadeText />
              </div>
            </div>
          </div>
          <div className="h-screen text-black bg-cover bg-center bg-gray-100">
            <div className="text-8xl font-bold border-b-2 border-black">
              <MovingText />
            </div>
            <div className="w-screen h-1/2 bg-gray-100 border-t-0 border-b-2 border-black flex ">
              <div className="w-3/12  p-5 flex font-hannari border-r-2 border-black">
                <p>
                  I am currently studying at Waseda University, majoring in
                  Information and Communication Engineering at the School of
                  Fundamental Science and Engineering. I have a deep passion for
                  software development and innovative technologies. My focus
                  lies in improving user experience through frontend
                  development, and I enjoy working on projects that integrate
                  creativity with technical skills. In my free time, I play
                  basketball, which helps me stay active and learn valuable team
                  skills.
                </p>
              </div>
              <div className="w-3/12 content-center">
                早稲田大学基幹理工学部情報通信学科
              </div>
            </div>
            <div className="w-screen h-1/2 bg-gray-100 border-t-0 border-b-2 border-black flex ">
              <div className="w-3/12  p-5 flex font-hannari border-r-2 border-black">
                <p>
                  プロフィール
                  <br /> 生年月日: 2003/06/12
                  <br />
                  出身: 埼玉
                  <br />
                  趣味: バスケ
                </p>
              </div>
              <div className="w-3/12 content-center">
                早稲田大学基幹理工学部情報通信学科
              </div>
            </div>
            <div className="w-screen h-1/2 bg-gray-100 border-t-0 border-b-2 border-black flex ">
              <div className="w-3/12  p-5 flex font-hannari border-r-2 border-black">
                <p>
                  プロフィール
                  <br /> 生年月日: 2003/06/12
                  <br />
                  出身: 埼玉
                  <br />
                  趣味: バスケ
                </p>
              </div>
              <div className="w-3/12 content-center">
                早稲田大学基幹理工学部情報通信学科
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
