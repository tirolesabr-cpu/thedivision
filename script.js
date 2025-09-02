document.addEventListener("DOMContentLoaded", function() {
    const builds = {
        "Agressor - Purista": {
            "Visão Geral": "Foco em dano de arma com a SMG Purista, oferecendo um bom equilíbrio entre dano e sobrevivência. Ideal para conteúdo Heróico.",
            "Especialização": "Artilheiro (+10% proteção ao matar).",
            "Armas": {
                "Principal": "Purista (SM9 nomeada) - Alto dano, talento \"Otimização Perfeita\".",
                "Secundária": "Rock and Roll (escopeta) - Para bufar o Agressor rapidamente. Alternativas: Santelmo, Alex Lexcon, F2000."
            },
            "Peças de Equipamento": [
                "4 peças do conjunto Agressor (Máscara, Colete, Luva, Mochila).",
                "Colete Agressor: Aumenta dano por acúmulo para 0.90% (total 180%).",
                "Mochila Agressor: Aumenta acúmulo de dano para 200% (dobra 65% para 130%).",
                "Joelheira Palisade (+10% dano à proteção).",
                "Luva Overlord (proteção balística, dano alvo exposto, chance)."
            ],
            "Atributos": "3 peças proteção balística, 3 peças dano de arma. Foco em dano crítico e chance de crítico (58% chance, 138% dano crítico).",
            "Habilidades": ["Colmeia (reviver)", "Escudo (ativar/desativar rápido)", "Granada de espuma"],
            "Estilo de Jogo": "Jogar com cobertura, flanqueando inimigos. Pode ser agressiva, mas exige habilidade. Não recomendada para Lendárias/Incursões.",
            "Video Link": "https://www.youtube.com/watch?v=s06Lk2TwGeo",
            "Tipo": "DPS"
        },
        "Berrante (Raide e Incursão)": {
            "Visão Geral": "Dano máximo focado em tiros na cabeça para Raides e Incursões. Exige alta precisão.",
            "Especialização": "Fogareiro (Firewall) - Escudo Agressor (aumenta dano por inimigo à frente).",
            "Armas": {
                "Principal": "Berrante (St. Elmo\"s Engine) - Dano ao alvo exposto.",
                "Secundária": "Rock n\" Roll (escopeta) - Para acumular bônus do Agressor."
            },
            "Peças de Equipamento": [
                "4 peças do conjunto Agressor (Máscara, Colete, Mochila, Coldre) - Todas com \"Dano na cabeça\" como atributo secundário.",
                "Luvas Punhos Sangrentos (exóticas) - +25% dano de arma.",
                "Joelheira Oração do Ateu (Providence Defense) - Dano na cabeça."
            ],
            "Habilidades": ["Escudo Agressor", "Segunda habilidade flexível (Pulso, Isca, Colmeia)"],
            "Estilo de Jogo": "Foco total em tiros na cabeça. Ideal para bosses específicos. Não oferece sobrevivência.",
            "Video Link": "https://www.youtube.com/watch?v=D4oSvygfYS8",
            "Tipo": "DPS"
        },
        "Agressor com Invencionista": {
            "Visão Geral": "Alto dano com metralhadoras leves (LMGs), combinando talentos de armas com a máscara Invencionista.",
            "Especialização": "Minigun.",
            "Armas": {
                "Principal": "GR9 - Talento \"Homicida\".",
                "Secundária": "RPK-74 Clássica - Talento \"Frenesi\".",
                "Pistola": "Órbita."
            },
            "Peças de Equipamento": [
                "Máscara Invencionista (exótica) - Talento \"Epítome\" (arma primária herda talento da secundária).",
                "4 peças do \"Arreios do Agressor\" (Colete com \"Tirar Vantagem\", Mochila com \"Gestão de Risco\").",
                "Joelheiras Oração de Ateu (Fox\"s Prayer) - Dano adicional a alvos fora de cobertura."
            ],
            "Atributos": "Foco em Dano de Arma, Dano Crítico e Chance de Crítico.",
            "Habilidades": ["Bomba Pegajosa PEM", "Isca"],
            "Estilo de Jogo": "GR9 se beneficia de Homicida e Frenesi simultaneamente. Foco em dano massivo com LMG.",
            "Video Link": "https://www.youtube.com/watch?v=7E6-ROHvhF0",
            "Tipo": "DPS"
        },
        "Ouroboros (Raides e Incursão)": {
            "Visão Geral": "Build de DPS de alto dano para incursões (foco em \"Pombinhos\"). Totalmente vermelha, maximizando dano crítico.",
            "Especialização": "Fogareiro - Para habilitar o Escudo Agressor.",
            "Armas": {
                "Principal": "Ouroboros (SMG exótica) - Proficiência nível 20, dano ao alvo exposto."
            },
            "Peças de Equipamento": [
                "4 peças do \"Arreios do Agressor\".",
                "Máscara Coiote (exótica).",
                "Joelheira Oração do Ateu (nomeada)."
            ],
            "Atributos": "Todos os atributos e modificadores são voltados para maximizar o dano crítico, sem a necessidade de adicionar chance de crítico.",
            "Habilidades": ["Escudo Agressor (+11% dano por inimigo à frente)", "Segunda habilidade: Isca (speedruns) ou Colmeia Reanimadora (normal)"],
            "Estilo de Jogo": "Acumular bônus de dano do Agressor, médico, Coiote e escudo para dano massivo (até 6 milhões por tiro).",
            "Video Link": "https://www.youtube.com/watch?v=xmoCron0q0g",
            "Tipo": "DPS"
        },
        "Médico (Iniciativa Futura)": {
            "Visão Geral": "Foco em suporte e aumento de dano para o time, maximizando cura e dano do grupo.",
            "Especialização": "Sobrevivencialista (Besta) - Aumenta cura e +10% dano extra ao grupo.",
            "Armas": {
                "Principal": "Canhoto (escopeta) - Talento \"Marreta Perfeita\" (alvos recebem +40% dano de granadas).",
                "Secundária": "Escorpião (exótica) - Aplica debuffs (+20% dano recebido pelo alvo).",
                "Pistola": "Com talento Futuro Perfeito (para sobrecarga)."
            },
            "Peças de Equipamento": [
                "Mochila com talento \"Perfeitamente Oportunista\" (+15% dano de escopeta).",
                "4 peças do \"Iniciativa Futura\" (incluindo colete) - +25% dano total de armas/habilidades para jogador e aliados.",
                "Luvas Luvas da UECPN (exóticas) - Concede sobrecarga ao grupo ao destruir colmeia."
            ],
            "Atributos": "Foco em Aceleração de Habilidade e Habilidades de Conserto.",
            "Habilidades": ["Colmeia Restauradora", "Lançador Químico Fortificador"],
            "Estilo de Jogo": "Suporte ao time, aumentando dano e cura. Usa escopeta e Escorpião para debuffs. Gerencia sobrecarga para maximizar habilidades.",
            "Video Link": "https://www.youtube.com/watch?v=4XIJg5W8n2Q",
            "Tipo": "Suporte"
        },
        "Lendária Solo (sem Agressor)": {
            "Visão Geral": "Alta regeneração de proteção (7% por segundo) e proteção contra elites (até 78%). Projetada para Lendário solo.",
            "Especialização": "Sobrevivencialista - Para a besta (quebrar blindagem de cães de guerra) e +10% proteção contra elites.",
            "Armas": {
                "Principal": "Culatra (exótica) - +200% dano crítico.",
                "Secundária": "Lexington (fuzil de assalto) - Dano à vida de inimigos sem blindagem."
            },
            "Peças de Equipamento": [
                "Mochila Lembrancinha (exótica) - +13% proteção contra elites.",
                "Máscara Fica Frio (exótica) - Proteção balística, crítico, proteção contra elites.",
                "Colete Bellstone Armory - +1% regeneração proteção, Obliterar, proteção contra elites.",
                "Luva Gila Guard - Dano crítico, manuseio.",
                "Coldre Gila Guard - +2% regeneração proteção, chance, crítico.",
                "Joelheira Guarda do Imperador (Murakami nomeada) - +1% regeneração proteção, proteção balística, regeneração, dano crítico."
            ],
            "Atributos": "Regeneração de Proteção: 7% por segundo. Proteção contra Elites: 78%. Chance de Crítico: 58-60%. Dano Crítico: 332%.",
            "Habilidades": ["Escudo", "Isca"],
            "Modificadores de Temporada (Essenciais)": ["Revestimento Extra (+5% proteção contra elites por núcleo azul)", "Multitarefa (aumenta duração/vida da isca)", "Segurança em Primeiro Lugar (aumenta proteção contra efeitos para 40%, reduz sangramento da Culatra)"],
            "Estilo de Jogo": "Alta regeneração e proteção para sobreviver em Lendário. Usa besta para quebrar blindagens e Culatra para dano. Isca para distrair inimigos.",
            "Video Link": "https://www.youtube.com/watch?v=eV01xwRl544",
            "Tipo": "Tank"
        },
        "Tank para Lendária": {
            "Visão Geral": "Build full tank definitiva, focada em resistência a efeitos, regeneração de armadura e proteção contra elites. Transforma missões lendárias em um \"passeio no parque\".",
            "Especialização": "Não especificada (deve complementar sobrevivência e regeneração).",
            "Armas": {
                "Principal": "Lexington (fuzil de assalto).",
                "Secundária": "Sweet Dreams (escopeta exótica) - Mata instantaneamente inimigos não-elite com ataque corpo a corpo."
            },
            "Peças de Equipamento": [
                "Máscara Catharsis (exótica).",
                "Mochila Belstone Armory.",
                "Peitoral Fenris Group.",
                "Outras peças: Devem complementar proteção e regeneração."
            ],
            "Atributos": "Foco em \"proteção contra elites\" e \"proteção contra perigos\" (hazard protection).",
            "Habilidades": ["Escudo Cruzado", "Colmeia Reanimadora"],
            "Estilo de Jogo": "Permite estilo de jogo agressivo devido à alta sobrevivência. Ideal para conteúdo desafiador.",
            "Video Link": "https://www.youtube.com/watch?v=zDrtjIlmSoM",
            "Tipo": "Tank"
        },
        "Habilidade (Skill Build)": {
            "Visão Geral": "Build de habilidade para iniciantes e para todo o conteúdo do jogo. Foco em dano de habilidade, jogando de cobertura.",
            "Especialização": "Técnico.",
            "Armas": {
                "Principal": "Capacitor (fuzil de assalto).",
                "Secundária": "Cobaia (rifle).",
                "Pistola": "Kard personalizada."
            },
            "Peças de Equipamento": [
                "3 peças da Empress International.",
                "Mochila Hana-U.",
                "Luva Serpe.",
                "Coldre Waveform."
            ],
            "Habilidades": ["Torreta Agressora", "Drone Agressor"],
            "Estilo de Jogo": "Ficar na cobertura e usar as habilidades para causar dano.",
            "Video Link": "https://www.youtube.com/watch?v=Fv4F0Oy12o8",
            "Tipo": "Habilidade"
        }
    };

    const buildMenu = document.getElementById("build-menu");
    const buildDetails = document.getElementById("build-details");
    const buildTypeFilter = document.getElementById("build-type-filter");
    let currentSelectedButton = null; // Track the currently selected button

    function renderBuildButtons(filterType) {
        buildMenu.innerHTML = ""; // Clear existing buttons
        for (const buildName in builds) {
            const build = builds[buildName];
            if (filterType === "all" || build.Tipo === filterType) {
                const button = document.createElement("button");
                button.textContent = buildName;
                button.classList.add("build-button");
                button.addEventListener("click", () => {
                    // Remove \'selected\' class from previous button
                    if (currentSelectedButton) {
                        currentSelectedButton.classList.remove("selected");
                    }
                    // Add \'selected\' class to the clicked button
                    button.classList.add("selected");
                    currentSelectedButton = button;
                    displayBuildDetails(buildName);
                });
                buildMenu.appendChild(button);
            }
        }
    }

    buildTypeFilter.addEventListener("change", (event) => {
        renderBuildButtons(event.target.value);
    });

    // Initial render
    renderBuildButtons("all");

    function displayBuildDetails(buildName) {
        const build = builds[buildName];
        let detailsHtml = `<h2>${buildName}</h2>`;

        for (const section in build) {
            if (section === "Video Link") {
                detailsHtml += `<h3>Vídeo de Referência</h3>`;
                detailsHtml += `<p><a href="${build[section]}" target="_blank" class="video-link">Assistir ao Vídeo</a></p>`;
            } else if (section !== "Tipo") { // Exclude the \'Tipo\' property from being displayed
                detailsHtml += `<h3>${section}</h3>`;
                const content = build[section];
                if (typeof content === "string") {
                    detailsHtml += `<p>${content}</p>`;
                } else if (Array.isArray(content)) {
                    detailsHtml += `<ul>`;
                    content.forEach(item => {
                        detailsHtml += `<li>${item}</li>`;
                    });
                    detailsHtml += `</ul>`;
                } else if (typeof content === "object") {
                    detailsHtml += `<ul>`;
                    for (const key in content) {
                        detailsHtml += `<li><strong>${key}:</strong> ${content[key]}</li>`;
                    }
                    detailsHtml += `</ul>`;
                }
            }
        }

        buildDetails.innerHTML = detailsHtml;
    }
});


