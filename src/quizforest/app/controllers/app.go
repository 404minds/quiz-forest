package controllers

import "github.com/revel/revel"
import "quizforest/app"

type App struct {
	*revel.Controller
}

type User struct {
	Name string
	Id   int64
}

func getUser(userid int) (u User) {
	var id int64
	var name string
	rows, err := app.DB.Query("select id, name from users where id = ?", userid)
	if err != nil {
		revel.INFO.Println(err)
	}
	defer rows.Close()
	for rows.Next() {
		err := rows.Scan(&id, &name)
		if err != nil {
			revel.INFO.Println(err)
		}
		u := User{name, id}
		return u
	}

	err = rows.Err()
	if err != nil {
		revel.INFO.Println(err)
	}
	u = User{"Ksh", 1}
	return u
}
func (c App) Index() revel.Result {
	return c.RenderJson(getUser(1))
}
