import React from "react";
import { format, formatDistance } from "date-fns";
import Comment from "../Components/PostsComponents/Comment";
import {
  CommentInput,
  SubmitComment,
} from "../Components/FormsComponents/CommentFormElements";
const PostPage = () => {
  return (
    <section className="w-[90%] border border-gray border-solid mx-auto my-[5rem] p-16 rounded-lg flex flex-col items-center justify-center">
      <h3 className="text-gray text-5xl font-extrabold py-10">Title of post</h3>
      <div className="flex items-center justify-center gap-x-5 py-10">
        <div className="text-lg font-semibold hover:underline">
          by @jalil_lafkir ,
        </div>
        <div className="text-lg font-semibold">
          {/* {format(new Date(2021, 7, 20), "PP")} */}
          {formatDistance(new Date(2021, 7, 20), new Date(), {
            addSuffix: true,
          })}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus libero orci
        feugiat euismod ad. Primis penatibus condimentum suscipit mauris
        tincidunt. Sagittis dignissim facilisis fames sit justo imperdiet nostra
        neque. Fringilla risus quam mus aenean, viverra ac. Elit inceptos semper
        tristique lectus rutrum quis cras. Morbi ornare fusce congue nisi, id
        felis. Rhoncus maecenas cursus suscipit fermentum inceptos cubilia
        potenti enim. Posuere mattis himenaeos aenean duis etiam, odio eu
        penatibus. Mus consectetur auctor cubilia class tellus nascetur maximus.
        Luctus cubilia blandit dolor orci suscipit arcu montes non. Eget ac
        proin urna ultricies nisi erat phasellus ultricies elementum. Hendrerit
        tempus et gravida nulla condimentum. Lacus suscipit malesuada nullam
        phasellus nam. Vestibulum velit ante nostra purus etiam felis morbi.
        Ullamcorper est ultricies ante fusce natoque ipsum mauris turpis
        feugiat. Ex lorem mi; molestie curae placerat nullam. Neque dictumst
        congue mi phasellus dictum diam. Velit est vel pulvinar habitant rutrum
        magnis varius sollicitudin. Maximus tempus gravida neque porta mi
        elementum a risus. Nam libero id suspendisse; nulla dignissim vehicula
        ultrices. Mi nunc congue potenti feugiat quis aliquam libero. Rhoncus
        gravida commodo posuere eget iaculis. Hac sapien non libero tortor
        laoreet massa. Litora hac senectus ultricies elementum posuere montes
        suspendisse suscipit. Sed egestas hac vehicula, quis neque semper.
        Viverra viverra at blandit; ullamcorper praesent taciti. Molestie
        commodo ultricies hendrerit potenti tincidunt magna maecenas. Eros quis
        curae facilisi pretium; adipiscing diam. Aliquet luctus laoreet
        himenaeos curae; consectetur scelerisque etiam a. Viverra vel platea
        vulputate elementum vehicula. Ipsum class augue felis dignissim ex
        natoque ultricies. Atellus potenti tempor rutrum magnis pulvinar
        vivamus! Dignissim aptent integer cubilia tellus magnis ridiculus elit.
        Sapien ad torquent torquent suspendisse purus sed lacus. Class suscipit
        dapibus nec pellentesque nisi himenaeos. Sed ut nostra eros nulla sit
        fermentum torquent. Euismod mus hendrerit torquent dapibus accumsan odio
        rutrum blandit volutpat? Maecenas feugiat ac erat lorem aliquet conubia.
        Magna vulputate varius magna; nam convallis id. Efficitur est ac viverra
        praesent platea justo. Ac sed urna morbi aliquet, vulputate blandit ante
        aenean. Nibh lorem per felis penatibus fusce, molestie massa. Maximus
        efficitur nostra molestie pharetra mollis magna. Turpis in dignissim
        tempor enim nulla at volutpat orci metus. Ornare nisi in metus in
        habitasse donec senectus felis. Nisl ligula vivamus ante diam ultrices
        imperdiet commodo. Porta elit aptent vitae vitae in convallis. Ex nostra
        eros duis dignissim litora, tincidunt augue. Euismod turpis maecenas
        nibh curae etiam dui interdum erat. Lacinia torquent ornare porttitor
        lectus fermentum? Dictum metus varius ex nisi ante dictum. Viverra
        suspendisse ullamcorper ridiculus integer sollicitudin dis ultricies.
        Finibus velit libero penatibus magna diam proin. Eleifend ullamcorper
        nostra dui metus condimentum mollis sagittis fermentum. Tristique class
        integer sem neque aenean non semper tincidunt. Purus congue feugiat
        ornare ligula mollis. Scelerisque id non dui potenti lacus et penatibus
        diam. Nam viverra conubia sodales aliquam vitae netus primis? Parturient
        nec sollicitudin accumsan arcu posuere pellentesque. Pharetra faucibus
        facilisis vel mattis blandit porttitor enim. Inceptos posuere ad
        conubia, suspendisse nascetur aliquet aliquet. Interdum habitant mus
        vulputate feugiat risus hendrerit mattis. Nibh eleifend varius
        tincidunt; purus erat morbi! Rutrum scelerisque rutrum fermentum nam ut.
        Vitae consectetur dis euismod est, cursus etiam ornare. Egestas ultrices
        consectetur parturient nibh quis. Quis torquent penatibus iaculis nunc
        justo nec netus. Tempus vitae velit dictum; lobortis purus inceptos.
        Erat enim volutpat iaculis est aptent. Ad malesuada leo facilisis
        rhoncus non eleifend imperdiet sociosqu curabitur. Iaculis iaculis
        feugiat duis vivamus convallis luctus consequat enim. Aenean ornare
        tristique fames cubilia fringilla interdum. Nisl vehicula sodales fames
        etiam amet justo. Rhoncus adipiscing integer nunc vivamus, sodales
        interdum eros. Vulputate finibus blandit; libero a ridiculus porta
        lectus. Mus duis enim conubia montes arcu nisl. Habitasse porttitor
        habitant enim lobortis maecenas neque magnis volutpat. Interdum et
        potenti pulvinar; fringilla eleifend urna maximus hendrerit. Dictum
        habitant phasellus condimentum scelerisque magnis mollis netus. Lectus
        curae sodales dis ex ridiculus volutpat erat. Dictum diam ante per
        vivamus sagittis leo phasellus. Parturient fusce facilisi conubia
        dapibus aliquet. Blandit varius aenean faucibus ipsum mus porttitor
        vehicula fames. Ante ultrices eleifend est justo libero auctor pulvinar.
        Turpis dolor nostra finibus aptent vitae. Ligula porttitor vel orci amet
        sodales sagittis etiam tortor augue. Aliquam odio ridiculus condimentum
        ultrices adipiscing nulla neque. Aptent fusce adipiscing tristique felis
        fringilla? Enim elementum tortor vulputate porta feugiat gravida. Risus
        auctor feugiat turpis a eros lobortis. Interdum sit diam morbi eget
        dolor tempus libero. Mattis orci etiam nec sit consectetur massa augue
        nam! Taciti egestas pulvinar blandit etiam per a pretium. Risus rhoncus
        morbi felis; finibus condimentum mi suscipit. Aliquet massa consequat
        aenean quisque tempor laoreet etiam. Fusce sodales nec tristique
        ullamcorper montes; donec mollis dolor. Porttitor in cubilia quisque
        natoque tincidunt? Posuere dictumst dictum tortor primis non magnis
        lobortis ornare erat. Praesent molestie lorem platea elit quis.
        Fringilla elit sodales varius sit; purus non mi. Nisi magnis mattis
        tincidunt dolor, odio tellus lobortis tincidunt. Lobortis ultricies
        lacus hac felis diam duis class ipsum. Purus elit maximus augue
        porttitor nascetur; ornare maecenas cras varius. At mauris himenaeos
        imperdiet curabitur habitasse laoreet. Proin gravida himenaeos vitae;
        quam velit gravida. Netus felis volutpat gravida suscipit eu suspendisse
        posuere arcu curabitur. In odio varius purus vehicula placerat quisque.
        Ut mi praesent elementum etiam mollis ut! Primis arcu euismod sociosqu
        risus pulvinar cursus tempor facilisis. Maecenas natoque leo dui quis
        conubia; pulvinar interdum. Morbi libero dis sodales dapibus nunc massa.
        Lacinia scelerisque risus lacinia malesuada ad facilisis. Sagittis
        aliquam maecenas ut malesuada malesuada fringilla venenatis vulputate.
        Ac morbi fermentum finibus posuere at duis euismod fermentum. Fusce
        semper a condimentum ex, senectus adipiscing lobortis. Eu rutrum hac,
        pellentesque curae montes faucibus. Morbi curae imperdiet natoque,
        tincidunt habitant vitae cras sed. Blandit ac varius maecenas cursus
        quisque nibh elementum. Auctor sapien maecenas ullamcorper id ridiculus
        senectus arcu. Tempus senectus proin laoreet tempus donec. Dolor sodales
        sem fermentum diam facilisi eleifend ridiculus. Malesuada litora etiam,
        nam sodales maecenas et ad tempus. Amet diam tristique egestas iaculis
        potenti luctus? Aenean elit pretium dolor dignissim ipsum litora vivamus
        efficitur. Nullam montes arcu curae felis nulla vivamus at imperdiet. Eu
        cras viverra mauris lorem rhoncus at porttitor. Aptent lobortis congue a
        nostra laoreet massa. Eleifend duis ornare cras viverra lobortis
        phasellus felis. Vivamus etiam nam nibh; nullam vel facilisis.
        Adipiscing volutpat magnis ipsum; lacus volutpat pharetra! Pretium justo
        et curabitur suspendisse neque euismod. Porta rutrum maecenas commodo
        suspendisse rutrum erat mauris laoreet. Ipsum orci nulla tempus
        fringilla hendrerit habitant. Tristique pharetra efficitur etiam duis
        molestie torquent viverra. Morbi ac montes nullam aptent habitant
        phasellus libero pretium. Dapibus placerat turpis auctor accumsan
        dignissim scelerisque. Nisi sapien ante lectus natoque mattis; platea
        metus. Mattis viverra venenatis lacus litora tempor natoque dictum.
        Magnis sed urna integer venenatis est urna per ornare. Mi tincidunt
        mattis proin mollis consequat magna. Magnis finibus diam efficitur sed
        viverra. Pharetra platea adipiscing pharetra tellus feugiat dolor.
        Mattis facilisi curae bibendum pretium euismod sed non. Ullamcorper
        velit lacus vehicula leo ad. Purus etiam fringilla pulvinar; velit dis
        purus. Lectus cubilia etiam porttitor interdum mauris. Commodo laoreet
        imperdiet etiam orci proin laoreet amet primis eros. Blandit erat at,
        malesuada ultrices feugiat conubia varius. Ut felis eleifend netus massa
        habitant odio platea; efficitur accumsan. Placerat condimentum efficitur
        pellentesque felis curae mauris lobortis proin ornare. Tempor amet
        maximus ridiculus molestie ante. Leo ex placerat porta; suspendisse
        mauris ultrices eros. Egestas penatibus libero; mus placerat vestibulum
        nibh. Lorem dis porta inceptos pharetra eros sem. Dignissim vitae
        imperdiet pellentesque porttitor pharetra. Urna et nulla velit lobortis
        donec tempus vivamus aliquam. Amet vulputate nisl ex etiam praesent
        litora non a. Viverra fusce ut; fames gravida dapibus platea proin?
        Sapien dis libero suscipit pellentesque tristique euismod morbi
        pellentesque. Dui quam vulputate finibus proin nascetur. Viverra
        pulvinar augue congue porttitor curae. Urna lectus facilisi quis potenti
        integer felis lectus sapien. Conubia ad placerat elit libero quis
        quisque? Velit nullam turpis finibus ullamcorper posuere etiam.
      </div>
      <div className="py-12 flex flex-col w-full text-xl font-semibold">
        <h3>Comments</h3>
        <form className="flex items-start flex-col">
          <CommentInput />
          <SubmitComment />
        </form>
      </div>

      <div className="w-full my-[5rem] divide-y-[1px] divide-gray divide-solid">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </section>
  );
};

export default PostPage;
