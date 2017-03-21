var teamMembers = [
	{
		id: 1,
		name: "Gustavo Silva",
		role: "CEO",
		background: "Computer Engineering"
	},
	{
		id: 2,
		name: "João Silva",
		role: "CTO",
		background: "Computer Engineering"
	},
	{
		id: 17,
		name: "Luis Martins",
		role: "CCO",
		background: "Design"
	},
	{
		id: 21,
		name: "Marco Diniz",
		role: "CBO",
		background: "Service Engineering"
	},
	{
		id: 40,
		name: "Filipa Brito",
		role: "Team Leader - A",
		background: "Computer Engineering"
	},
	{
		id: 10,
		name: "Sérgio Domingues",
		role: "Team Leader - B",
		background: "Computer Engineering"
	},
	{
		id: 23,
		name: "Afonso Castro",
		role: "Team Leader - C",
		background: "Computer Engineering"
	},
	{
		id: 37,
		name: "Pedro Castro",
		role: "Team Leader - D",
		background: "Computer Engineering"
	},
	{
		id: 22,
		name: "Pedro Martins",
		background: "Computer Engineering"
	},
	{
		id: 3,
		name: "João Duarte",
		background: "Computer Engineering"
	},
	{
		id: 4,
		name: "André Pinto",
		background: "Computer Engineering"
	},
	{
		id: 5,
		name: "José Rebelo",
		background: "Computer Engineering"
	},
	{
		id: 6,
		name: "Matheus Carvalho",
		background: "Computer Engineering"
	},
	{
		id: 7,
		name: "Miguel Botelho",
		background: "Computer Engineering"
	},
	{
		id: 8,
		name: "Ricardo Silva",
		background: "Computer Engineering"
	},
	{
		id: 9,
		name: "Hugo Machado",
		background: "Computer Engineering"
	},
	{
		id: 11,
		name: "Nuno Silva",
		background: "Computer Engineering"
	},
	{
		id: 12,
		name: "Pedro Melo",
		background: "Computer Engineering"
	},
	{
		id: 13,
		name: "Paulo Andrade",
		background: "Service Engineering"
	},
	{
		id: 14,
		name: "Inês Caldas",
		background: "Computer Engineering"
	},
	{
		id: 15,
		name: "Miguel Urbiola",
		background: "Service Engineering"
	},
	{
		id: 16,
		name: "Sofia Cunha",
		background: "Design"
	},
	{
		id: 18,
		name: "Joana Rodrigues",
		background: "Service Engineering"
	},
	{
		id: 19,
		name: "Edgar Ramos",
		background: "Computer Engineering"
	},
	{
		id: 20,
		name: "José Pedro",
		background: "Computer Engineering"
	},
	{
		id: 21,
		name: "Marco Diniz",
		background: "Service Engineering"
	},
	{
		id: 24,
		name: "João Figueiredo",
		background: "Computer Engineering"
	},
	{
		id: 25,
		name: "Eduardo Reis",
		background: "Computer Engineering"
	},
	{
		id: 26,
		name: "Isabela Almeida",
		background: "Multimedia"
	},
	{
		id: 27,
		name: "Daniela Varandas",
		background: "Service Engineering"
	},
	{
		id: 28,
		name: "Ana Cardoso",
		background: "Service Engineering"
	},
	{
		id: 29,
		name: "João Nogueira",
		background: "Computer Engineering"
	},
	{
		id: 30,
		name: "Joel Carneiro",
		background: "Computer Engineering"
	},
	{
		id: 31,
		name: "Francisco Veiga",
		background: "Computer Engineering"
	},
	{
		id: 32,
		name: "Ricardo Lopes",
		background: "Computer Engineering"
	},
	{
		id: 33,
		name: "Pedro Moura",
		background: "Computer Engineering"
	},
	{
		id: 34,
		name: "Ana Teixeira",
		background: "Multimedia"
	},
	{
		id: 35,
		name: "Cristina Assunção",
		background: "Multimedia"
	},
	{
		id: 36,
		name: "Raquel Soares",
		background: "Multimedia"
	},
	{
		id: 38,
		name: "Alonso Torres",
		background: "Multimedia"
	},
	{
		id: 39,
		name: "Daniela Ribeiro",
		background: "Multimedia"
	},
	{
		id: 41,
		name: "João Paiva",
		background: "Multimedia"
	}
]

$( document ).ready(function() {
	var team = $("#team");
	for (var i = 0; i < teamMembers.length; i++) {
		var teamMember = teamMembers[i];
		var teamMemberHTML = '<div class="col-sm-3">'
								+'<div class="team-member" data-id="' + teamMember.id + '">'
									+'<img src="img/team/fotos_bw/' + teamMember.id + '.jpg" class="img-responsive img-square" alt="' + teamMember.name + '">'
									+'<div class="caption">'
										+'<p class="team-member-name">' + teamMember.name + '</p>';
		if (teamMember.role) {
			teamMemberHTML += 			 '<p class="team-member-role">' + teamMember.role + '</p>';
		}
		teamMemberHTML += 				 '<p class="team-member-background">' + teamMember.background + '</p>'
									+'</div>'
								+'</div>'
							+'</div>'
		team.append(teamMemberHTML);
	}
	team.find(".team-member").hover(function (e) {
			$(this).find("img").attr("src", "img/team/fotos_filtro/" + $(this).data("id") + ".jpg");
		}, function (e) {
			$(this).find("img").attr("src", "img/team/fotos_bw/" + $(this).data("id") + ".jpg");
	});

	$(".square").click(function () {
		var square = $(this);
		var id = square.data("id");
		var content = $("#content" + id);
		content.show();
		content.offset(square.offset());
		content.width(square.outerWidth());
		content.height(square.outerHeight());
		square.hide();

		content.click(function(event){
			event.stopPropagation();
		});

		content.animate({
			backgroundColor: "white",
			left: "10%",
			top: "10%",
			width: "80%",
			height: "80%"
		}, 400, function () {
			$(window).click(function() {
				closeContent(content, square);
			});
			$(document).keyup(function(e) {
				 if (e.keyCode == 27) {
					closeContent(content, square);
				}
			});
			content.find(".close").click(function() {
				closeContent(content, square);
			});
		});
	});
});

var closeContent = function(content, square) {
	square.show();
	var left = square.offset().left;
	var top = square.offset().top;
	square.hide();
	$(window).off("click");
	$(document).off("keyup");
	content.find(".close").off("click");
	content.off("click");
	content.animate({
			backgroundColor: "rgba(0, 0, 0, 0.25)",
			left: left,
			top: top,
			width: square.outerWidth(),
			height: square.outerHeight()
		}, 400, function () {
			content.hide();
			square.show();
		});
}
