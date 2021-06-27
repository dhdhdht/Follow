

type Following {
    follow(id: String!): Boolean
}

export default {
    Following: {
        follow: async (_, args, {request}) => {
            isAuthenticated
        }
    }
}

// 한 회원이 팔로우누르면
// 팔로잉 + 1 (회원 b가 찍힘)

// select 회원번호 from FOLLOW where 팔로잉="b"를 하면 b의 팔로워(b를 팔로잉하는사람)
// select 팔로잉 from FOLLOW where 회원번호="b"하면 bdml b의 팔로잉(b가 팔로우하는사람들)

// 유저 정보에서 팔로잉 클릭하면
// select 회원번호 from FOLLOW where 팔로잉="b"를 하면 b의 팔로워(b를 팔로잉하는사람) 가져오게하고
// 팔로우 클릭하면
// select 팔로잉 from FOLLOW where 회원번호="b"하면 bdml b의 팔로잉(b가 팔로우하는사람들)

// 버튼 2개만들고 누르면
// console.log에 나오게